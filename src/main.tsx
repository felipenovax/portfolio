import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeFirebase } from '../firebase-config'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmHOSUOH0QOfXG-xewt4FAMh25nQOwIi0",
  authDomain: "felipenovax-dev.firebaseapp.com",
  projectId: "felipenovax-dev",
  storageBucket: "felipenovax-dev.appspot.com",
  messagingSenderId: "189624623663",
  appId: "1:189624623663:web:c5547f1b884a7ec40d9cda",
  measurementId: "G-E58LJVTQTQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
