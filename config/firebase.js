import firebase from 'firebase/app';
//import '@firebase/firestore';
//import '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBneUCQ-DAI1q33Zw_xpJOqM02ZQLw590o',
  authDomain: 'sanfordirrigationmobilea-da7b2.firebaseapp.com',
  projectId: 'sanfordirrigationmobilea-da7b2',
  storageBucket: 'sanfordirrigationmobilea-da7b2.appspot.com',
  messagingSenderId: '480471990050',
  appId: '1:480471990050:web:6e7d695a081570b452af7b',
  measurementId: 'G-6MTQBHLN1H',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//var db = firebase.firestore();
/*if (window.location.hostname === 'localhost') {
  db.functions().useFunctionsEmulator('http://localhost:5001');
  db.auth().useEmulator('http://localhost:9099');
  db.firestore().settings({
    host: 'localhost:8080',
    ssl: false,
  });
  //firebaseConfig.useEmulator('localhost', 8080);
}*/
//export const auth = firebase.auth();
export {firebase};
