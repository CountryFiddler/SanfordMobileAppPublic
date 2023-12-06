import firebase from 'firebase/app';

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

export {firebase};
