import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from './routes/main-layout';
import { Editor } from './routes/editor';
import { ControlPanel } from './routes/control-panel';
import { getAuth } from 'firebase/auth';
import { AuthStore } from './models/AuthStore';
import { observer } from 'mobx-react-lite';
import { getFirestore } from 'firebase/firestore';
import { ControlPanelModel } from './models/ControlPanelModel';
import { Profile } from './routes/profile';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDffaZ_TxNWdnQa84DWjzX0bQPhlOrdVsE',
  authDomain: 'christmas-tree-light.firebaseapp.com',
  projectId: 'christmas-tree-light',
  storageBucket: 'christmas-tree-light.firebasestorage.app',
  messagingSenderId: '474137480656',
  appId: '1:474137480656:web:4e043b32ac0c1333a4bdd5',
  measurementId: 'G-53W96H3LLB',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const authStore = new AuthStore(auth);

export const db = getFirestore(app);

export const analytics = getAnalytics(app);

export const controlPanelModel = new ControlPanelModel();

export const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<ControlPanel />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editor" element={<Editor />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
