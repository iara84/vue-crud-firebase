import firebase from 'firebase'
    
const config = {    
    apiKey: "AIzaSyCg9nIPxlk3yaM1jDcGyPaWT_IIyzBmUVI",
    authDomain: "productos-1ecd7.firebaseapp.com",
    databaseURL: "https://productos-1ecd7.firebaseio.com",
    projectId: "productos-1ecd7",
    storageBucket: "productos-1ecd7.appspot.com",
    messagingSenderId: "829108980212",
    appId: "1:829108980212:web:e73b8f9eb144207a7791a1"
};

firebase.initializeApp(config);
 
export const db = firebase.database();