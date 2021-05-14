import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCXgbN1F-RWf0K00Zn_NYkISrgmz07iFx8",
  authDomain: "tuone-77cae.firebaseapp.com",
  projectId: "tuone-77cae",
  storageBucket: "tuone-77cae.appspot.com",
  messagingSenderId: "1029248794263",
  appId: "1:1029248794263:web:3490bc232bafefa8f873d2"
};


  const fire =firebase.initializeApp(firebaseConfig);

  export  {fire}