import firebase from 'firebase/app';
import '@firebase/firestore';
var firebaseConfig = {
  apiKey: 'AIzaSyARlBxspfdjBzCEno_O35e3KjWW3kt_-pU',
  authDomain: 'sanfordirrigationmobileapp.firebaseapp.com',
  projectId: 'sanfordirrigationmobileapp',
  storageBucket: 'sanfordirrigationmobileapp.appspot.com',
  messagingSenderId: '32675392484',
  appId: '1:32675392484:web:bed5a3c12f2061304bf5f1',
  measurementId: 'G-PTX6M5TDHY',
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

export {firebase};
