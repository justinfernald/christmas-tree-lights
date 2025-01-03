import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  DocumentData,
  onSnapshot,
  getDoc,
} from 'firebase/firestore';
import { db, auth } from '../App';

// Define the Animation interface
export interface Animation {
  id: string; // Firestore document ID
  ownerId: string;
  title: string;
  description: string;
  code: string;
  createdAt: Date | null; // `null` if Firestore field is missing
  updatedAt: Date | null; // `null` if Firestore field is missing
}

export interface PlayerData {
  animationId: string;
  brightness: number;
  updatedAt: Date | null;
}

export function subscribeToAnimations(callback: (animations: Animation[]) => void) {
  const animationsCollection = collection(db, 'animations');

  return onSnapshot(animationsCollection, (snapshot) => {
    const animations: Animation[] = snapshot.docs.map((doc) => {
      const data = doc.data() as DocumentData;

      return {
        id: doc.id,
        ownerId: data.ownerId,
        title: data.title,
        description: data.description,
        code: data.code,
        createdAt: data.createdAt?.toDate() || null,
        updatedAt: data.updatedAt?.toDate() || null,
      };
    });

    callback(animations);
  });
}

/**
 * Fetch all animations from the Firestore animations collection.
 * @returns A promise that resolves to an array of animations
 */
export async function getAllAnimations(): Promise<Animation[]> {
  const animationsCollection = collection(db, 'animations');
  const q = query(animationsCollection);
  const snapshot = await getDocs(q);

  const animations: Animation[] = snapshot.docs.map((doc) => {
    const data = doc.data() as DocumentData;

    return {
      id: doc.id,
      ownerId: data.ownerId,
      title: data.title,
      description: data.description,
      code: data.code,
      createdAt: data.createdAt?.toDate() || null,
      updatedAt: data.updatedAt?.toDate() || null,
    };
  });

  return animations;
}

/**
 * Fetch all animations created by the signed-in user.
 * @returns A promise that resolves to an array of animations
 */
export async function getUserAnimations(): Promise<Animation[]> {
  if (!auth.currentUser) {
    throw new Error('User is not signed in.');
  }

  const animationsCollection = collection(db, 'animations');
  const q = query(animationsCollection, where('ownerId', '==', auth.currentUser.uid));
  const snapshot = await getDocs(q);

  const animations: Animation[] = snapshot.docs.map((doc) => {
    const data = doc.data() as DocumentData;

    return {
      id: doc.id,
      ownerId: data.ownerId,
      title: data.title,
      description: data.description,
      code: data.code,
      createdAt: data.createdAt?.toDate() || null,
      updatedAt: data.updatedAt?.toDate() || null,
    };
  });

  return animations;
}

/**
 * Create a new animation in Firestore.
 * @param animation - The animation data to create
 * @returns A promise that resolves to the created animation's ID
 */
export async function createAnimation(
  animation: Omit<Animation, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<string> {
  if (!auth.currentUser) {
    throw new Error('User is not signed in.');
  }

  const animationData = {
    ...animation,
    ownerId: auth.currentUser.uid,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const docRef = await addDoc(collection(db, 'animations'), animationData);
  return docRef.id;
}

/**
 * Update an existing animation in Firestore.
 * @param id - The ID of the animation to update
 * @param updates - The fields to update
 * @returns A promise that resolves when the update is complete
 */
export async function updateAnimation(
  id: string,
  updates: Partial<Omit<Animation, 'id' | 'ownerId'>>,
): Promise<void> {
  const animationRef = doc(db, 'animations', id);

  const updateData = {
    ...updates,
    updatedAt: new Date(),
  };

  await updateDoc(animationRef, updateData);
}

/**
 * Subscribe to changes in the main player's animation, brightness, and updatedAt.
 * @param callback - A function to call with the updated data
 * @returns A function to unsubscribe from the listener
 */
export function subscribeToMainPlayer(callback: (data: PlayerData) => void): () => void {
  const mainPlayerRef = doc(db, 'player', 'main');

  return onSnapshot(mainPlayerRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      callback({
        animationId: data.animationId || '',
        brightness: data.brightness || 0,
        updatedAt: data.updatedAt?.toDate() || null,
      });
    } else {
      console.warn('Main player document does not exist.');
      callback({ animationId: '', brightness: 0, updatedAt: null });
    }
  });
}

/**
 * Get the current animation, brightness, and updatedAt for the main player.
 * @returns A promise resolving to the main player data
 */
export async function getMainPlayer(): Promise<{
  animationId: string;
  brightness: number;
  updatedAt: Date | null;
}> {
  const mainPlayerRef = doc(db, 'player', 'main');
  const docSnapshot = await getDoc(mainPlayerRef);

  if (docSnapshot.exists()) {
    const data = docSnapshot.data();
    return {
      animationId: data.animationId || '',
      brightness: data.brightness || 0,
      updatedAt: data.updatedAt?.toDate() || null,
    };
  } else {
    throw new Error('Main player document does not exist.');
  }
}

/**
 * Delete an animation from Firestore.
 * @param id - The ID of the animation to delete
 * @returns A promise that resolves when the deletion is complete
 */
export async function deleteAnimation(id: string): Promise<void> {
  const animationRef = doc(db, 'animations', id);
  await deleteDoc(animationRef);
}

/**
 * Update the current animation for the main player.
 * @param animationId - The ID of the animation to set
 * @returns A promise that resolves when the update is complete
 */
export async function setMainPlayerAnimation(animationId: string): Promise<void> {
  if (!auth.currentUser) {
    throw new Error('User is not signed in.');
  }

  const mainPlayerRef = doc(db, 'player', 'main');

  const updateData = {
    animationId,
    updatedAt: new Date(),
    lastUpdater: auth.currentUser.uid,
  };

  await updateDoc(mainPlayerRef, updateData);
}

/**
 * Update the brightness for the main player.
 * @param brightness - The brightness level (0 to 1)
 * @returns A promise that resolves when the update is complete
 */
export async function setMainPlayerBrightness(brightness: number): Promise<void> {
  if (!auth.currentUser) {
    throw new Error('User is not signed in.');
  }

  if (brightness < 0 || brightness > 1) {
    throw new Error('Brightness must be a value between 0 and 1.');
  }

  const mainPlayerRef = doc(db, 'player', 'main');

  const updateData = {
    brightness,
    updatedAt: new Date(),
    lastUpdater: auth.currentUser.uid,
  };

  await updateDoc(mainPlayerRef, updateData);
}
