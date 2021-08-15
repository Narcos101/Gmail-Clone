import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyDAYpuw1jopwCz6JIzkzcMLzE6bCodxGbw",
  authDomain: "clone-df201.firebaseapp.com",
  projectId: "clone-df201",
  storageBucket: "clone-df201.appspot.com",
  messagingSenderId: "976172363969",
  appId: "1:976172363969:web:a79ba654395ad0faca6440"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};