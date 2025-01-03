// Updated ControlPanelModel
import { action, makeAutoObservable } from 'mobx';
import { auth } from '../App';
import {
  Animation,
  createAnimation,
  deleteAnimation,
  updateAnimation,
  subscribeToAnimations,
  PlayerData,
  subscribeToMainPlayer,
  setMainPlayerBrightness,
  setMainPlayerAnimation,
} from '../firebase';

export class ControlPanelModel {
  animations: Animation[] = [];
  playerData: PlayerData | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    // Set up subscription to Firestore updates
    this.subscribeToAnimations();
    this.subscribeToPlayerData();
  }

  subscribeToAnimations() {
    subscribeToAnimations(
      action((updatedAnimations) => {
        this.animations = updatedAnimations;
      }),
    );
  }

  subscribeToPlayerData() {
    subscribeToMainPlayer(
      action((playerData) => {
        this.playerData = playerData;
      }),
    );
  }

  updateBrightness(brightness: number) {
    setMainPlayerBrightness(brightness);
  }

  updatePlayedAnimation(animationId: string) {
    setMainPlayerAnimation(animationId);
  }

  get animationsMap(): Map<string, Animation> {
    return new Map(this.animations.map((animation) => [animation.id, animation]));
  }

  get userAnimations() {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return [];
    }

    return this.animations.filter((animation) => animation.ownerId === currentUser.uid);
  }

  async playAnimation(animationId: string) {
    this.updatePlayedAnimation(animationId);
  }

  async createAnimation(animation: Animation) {
    // Save the animation to Firestore
    await createAnimation(animation);
  }

  async deleteAnimation(id: string) {
    // Delete the animation from Firestore
    await deleteAnimation(id);
  }

  async updateAnimation(id: string, updates: Partial<Animation>) {
    // Update the animation in Firestore
    await updateAnimation(id, updates);
  }
}
