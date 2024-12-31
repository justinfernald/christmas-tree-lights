import { makeAutoObservable } from 'mobx';
import { auth } from '../App';
import {
  Animation,
  createAnimation,
  getAllAnimations,
  updateAnimation,
} from '../firebase';

export class ControlPanelModel {
  animations: Animation[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this.fetchAnimations();
  }

  async fetchAnimations() {
    this.animations = await getAllAnimations();
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
    createAnimation(animation);
    // Update the local state
    this.animations.push(animation);
  }

  async deleteAnimation(id: string) {
    // Delete the animation from Firestore
    this.deleteAnimation(id);
    // Update the local state
    this.animations = this.animations.filter((animation) => animation.id !== id);
  }

  async updateAnimation(id: string, updates: Partial<Animation>) {
    // Update the animation in Firestore
    updateAnimation(id, updates);

    // Update the local state
    this.animations = this.animations.map((animation) =>
      animation.id === id ? { ...animation, ...updates } : animation,
    );
  }
}
