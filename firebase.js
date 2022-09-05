//firebase conection
import firebase from 'firebase';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyASRxiSGWjx_7Z-XFuA9dUUkvl4_Hc0hXM",
    authDomain: "note-d7157.firebaseapp.com",
    databaseURL: "https://note-d7157-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "note-d7157",
    storageBucket: "note-d7157.appspot.com",
    messagingSenderId: "481121165223",
    appId: "1:481121165223:web:571b9f67b01e3030916082",
    measurementId: "G-KSHTYVLWPB"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;