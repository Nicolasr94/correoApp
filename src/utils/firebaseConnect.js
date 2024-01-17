import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDkXnuPWFf8BMZHNHxCtO5SNzQvWutEwdg",
  authDomain: "correo-vsym.firebaseapp.com",
  databaseURL: "https://correo-vsym.nam5.com",
  projectId: "correo-vsym",
  storageBucket: "correo-vsym.appspot.com",
  messagingSenderId: "812764185872",
  appId: "1:812764185872:web:be343f383f415824ff1195"
};

const app = initializeApp(firebaseConfig);

export {app};



