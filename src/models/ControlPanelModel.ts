// Updated ControlPanelModel
import { makeAutoObservable } from 'mobx';
import { auth } from '../App';
import {
  Animation,
  createAnimation,
  deleteAnimation,
  updateAnimation,
  subscribeToAnimations,
} from '../firebase';

export class ControlPanelModel {
  animations: Animation[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    // Set up subscription to Firestore updates
    this.subscribeToAnimations();
  }

  subscribeToAnimations() {
    subscribeToAnimations((updatedAnimations) => {
      this.animations = updatedAnimations;
    });
  }

  get userAnimations() {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return [];
    }

    return this.animations.filter((animation) => animation.ownerId === currentUser.uid);
  }

  async playAnimation(animationId: string) {
    throw new Error('Not implemented');
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
