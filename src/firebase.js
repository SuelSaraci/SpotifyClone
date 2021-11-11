import firebase from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyB5eRaNPvueT3Wb72ir0HT_55QbtKLljoE",
    authDomain: "music-efa32.firebaseapp.com",
    projectId: "music-efa32",
    storageBucket: "music-efa32.appspot.com",
    messagingSenderId: "354297292728",
    appId: "1:354297292728:web:d607920b8ea792684f114d",
    measurementId: "G-BBPEEFHT4W"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase