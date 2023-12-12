import {
  Box3,
  Color as ThreeColor,
  Vector3,
  AdditiveBlending,
  BufferGeometry,
  DynamicDrawUsage,
  Float32BufferAttribute,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  TextureLoader,
  WebGLRenderer,
  AxesHelper,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { fragmentShader, vertexShader } from './shaders';

import locations from '../locations.json';
import flarePng from './flare.png';
import { Light } from '../utils/Light';
import { AppModel } from '../models/AppModel';
import { autorun, reaction } from 'mobx';

const coords = locations.map((location) => {
  return new Vector3(
    2 * (location.x - 0.5),
    2 * (location.y - 0.5),
    -2 * 1.74 * (location.z - 1),
  );
});

const averageCoord = new Vector3();
for (const coord of coords) {
  averageCoord.add(coord);
}
averageCoord.divideScalar(coords.length);
const boundingBox = new Box3();
boundingBox.setFromPoints(coords);

interface State {
  coords: Vector3[];
  colors: ThreeColor[];
}

export class MainApp {
  private readonly renderer: WebGLRenderer;
  private readonly scene: Scene;
  private readonly camera: PerspectiveCamera;
  private readonly state: State;
  private readonly controls: OrbitControls;
  private lights!: BufferGeometry;

  destroyers: (() => void)[] = [];

  constructor(public appModel: AppModel) {
    const listener = (e: MessageEvent<any>) => {
      if (e.data.type === 'update') {
        this.setLights(e.data.lights.map((light: any) => Light.fromDto(light)));
      }
    };

    const reactionDisposer = reaction(
      () => appModel.worker,
      (worker, prevWorker) => {
        if (prevWorker) {
          prevWorker.removeEventListener('message', listener);
        }
        worker?.addEventListener('message', listener);
      },
      {
        fireImmediately: true,
      },
    );

    this.destroyers.push(reactionDisposer);

    // this.fpsControl = document.querySelector<HTMLInputElement>('#fpsLabel')!;

    // console.log(this.fpsControl);

    // this.fpsControl.oninput = () => {
    //   const value = Number(this.fpsControl.value);
    //   if (!this.fpsControl.validity.valid) {
    //     return;
    //   }
    //   this.fps = value;
    // };

    const canvas = document.querySelector<HTMLCanvasElement>('#mainCanvas')!;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(70, 1, 0.01, 100);
    this.camera.position.x = 5;
    this.camera.position.z = averageCoord.z;
    this.camera.up.set(0, 0, 1);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.target.copy(averageCoord);

    this.createLights();

    this.scene.add(new AxesHelper(1));

    this.state = {
      coords: coords.map((coord) => new Vector3(coord.x, coord.y, coord.z)),
      colors: coords.map((_) => new ThreeColor(0, 0, 0)),
    };

    this.renderer = new WebGLRenderer({ canvas, antialias: true });
    this.renderer.setAnimationLoop(this.animation.bind(this));

    const updateSize = () => {
      const { width, height } = canvas.parentElement!.getBoundingClientRect();
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    };

    updateSize();
    window.onresize = updateSize;
  }

  resetCamera() {
    this.camera.position.x = 5;
    this.camera.position.z = averageCoord.z;
    this.camera.up.set(0, 0, 1);
  }

  destructor() {
    for (const destroyer of this.destroyers) {
      destroyer();
    }

    this.destroyers = [];
  }

  setLights(lights: Light[]) {
    for (const [i, color] of this.state.colors.entries()) {
      const newColor = lights[i].color;

      color.r = newColor.red / 255;
      color.g = newColor.green / 255;
      color.b = newColor.blue / 255;
    }

    this.updateState();
  }

  private animation() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  private updateState() {
    const colors = this.lights.attributes.color;
    const colorsArray = colors.array;
    for (let i = 0; i < this.state.colors.length; i++) {
      // Use fallbacks wherever possible to prevent weird values from 'crashing' the app
      const color = this.state.colors[i] || { r: 0, g: 0, b: 0 };
      colorsArray[i * 3] = color.r || 0;
      colorsArray[i * 3 + 1] = color.g || 0;
      colorsArray[i * 3 + 2] = color.b || 0;
    }

    colors.needsUpdate = true;
  }

  private createLights() {
    const positions: number[] = [];
    const colors: number[] = [];

    for (const coord of coords) {
      positions.push(coord.x, coord.y, coord.z);
      colors.push(0, 0, 0);
    }
    const geometry = (this.lights = new BufferGeometry());
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute(
      'color',
      new Float32BufferAttribute(colors, 3).setUsage(DynamicDrawUsage),
    );
    const lightsObject = new Points(
      geometry,
      new ShaderMaterial({
        uniforms: {
          pointTexture: { value: new TextureLoader().load(flarePng) },
        },
        vertexShader,
        fragmentShader,
        blending: AdditiveBlending,
        depthTest: false,
        transparent: true,
        vertexColors: true,
      }),
    );

    this.scene.add(lightsObject);
  }
}
