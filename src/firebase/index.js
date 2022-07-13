import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAauCjjOLMcAPEve9veXIkHosKWjVzdKqo",
  authDomain: "edunation-6e4ef.firebaseapp.com",
  projectId: "edunation-6e4ef",
  storageBucket: "edunation-6e4ef.appspot.com",
  messagingSenderId: "113491577737",
  appId: "1:113491577737:web:18e482ef07231deec6ef58",
  measurementId: "G-VT0G35HZ1N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);