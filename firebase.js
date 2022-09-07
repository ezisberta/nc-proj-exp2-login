// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD47_7LCY-y1t7zIiVA7uZemzYcJCXhBII",
  authDomain: "nc-proj-spiking-exp2-firebase.firebaseapp.com",
  databaseURL:
    "https://nc-proj-spiking-exp2-firebase-default-rtdb.firebaseio.com",
  projectId: "nc-proj-spiking-exp2-firebase",
  storageBucket: "nc-proj-spiking-exp2-firebase.appspot.com",
  messagingSenderId: "973789869926",
  appId: "1:973789869926:web:d2a4dd4d595f3f3036baa7",
  measurementId: "G-6WYHKV23C7",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { auth };
