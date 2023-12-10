import { MainApp } from './display';

const app = new MainApp();

// add iframe lister for messages from the parent
window.addEventListener(
  'message',
  (event) => {
    const { data } = event;
    console.log(data);

    if (data.type === 'code') {
      console.log(data.data);
      app.updateCode(data.data);
    }
  },
  false,
);

window.updateLights = (lights: any) => {
  // console.log(lights);
  app.setLights(lights);
};
