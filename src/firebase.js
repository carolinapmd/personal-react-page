import React from "react";
import firebase from "firebase"

var firebaseApp= firebase.initializeApp({
    // Your web app's Firebase configuration

    apiKey: "AIzaSyBqwNyMdovOt2kBiP0eKVJ3T2KnMtuhYNQ",
    authDomain: "react-contact-form-id.firebaseapp.com",
    projectId: "react-contact-form-id",
    storageBucket: "react-contact-form-id.appspot.com",
    messagingSenderId: "317305343423",
    appId: "1:317305343423:web:2bf21947fe407d6a0c250a"
  }
 
)

var db =firebaseApp.firestore();

export {db}