import firebase from 'firebase/compat/app'

export const environment = {
 
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyDQ-n9M1Fx3cY44NLJ9a3prmmVuHn6mGiU",
    authDomain: "catafind-47081.firebaseapp.com",
    projectId: "catafind-47081",
    storageBucket: "catafind-47081.appspot.com",
    messagingSenderId: "850461722666",
    appId: "1:850461722666:web:3c8f006b2029a76fb79b53",
    measurementId: "G-5PBSGX49G7"
  },
  CountryJson: [
    {
      name: 'Souh Africa',
      dial_code: '+27',
      code: 'SA'
    },
    // {
    //   name: 'United States',
    //   dial_code: '+1',
    //   code: 'US'
    // },
  ]
};

// firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth;
