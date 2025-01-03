import { makeAutoObservable, computed } from 'mobx';
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  Auth,
  User,
} from 'firebase/auth';

export class AuthStore {
  user: User | null = null; // Holds the user object or null if not logged in

  constructor(private auth: Auth) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.checkAuthState();
  }

  get isLoggedIn() {
    return this.user !== null; // Computed value based on user field
  }

  private updateUser(user: User | null) {
    this.user = user;
  }

  checkAuthState() {
    this.auth.onAuthStateChanged((user) => {
      this.updateUser(user);
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      this.updateUser(result.user); // Update MobX state after login
    } catch (error) {
      console.error('Google login failed:', error);
    }
  }

  async loginWithGitHub() {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      this.updateUser(result.user); // Update MobX state after login
    } catch (error) {
      console.error('GitHub login failed:', error);
    }
  }

  logout() {
    this.auth
      .signOut()
      .then(() => {
        this.updateUser(null); // Clear user data on logout
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  }
}
