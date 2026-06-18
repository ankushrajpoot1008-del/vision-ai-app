import { initializeApp } from "firebase/app"

import {
  getAuth,
} from "firebase/auth"

import {
  getFirestore,
} from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyC9B3t-POvg_L0H2g27GljAq9VR4pCrDAc",

  authDomain:
    "vision-ai-app-9f308.firebaseapp.com",

  projectId:
    "vision-ai-app-9f308",

  storageBucket:
    "vision-ai-app-9f308.firebasestorage.app",

  messagingSenderId:
    "778918858239",

  appId:
    "1:778918858239:web:f40d32153b46687ed1abca",

  measurementId:
    "G-NFK5ZCT1EQ",
}

const app =
  initializeApp(firebaseConfig)

export const auth =
  getAuth(app)

export const db =
  getFirestore(app)