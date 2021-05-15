import * as firebase from 'firebase'

require('firebase/firestore')

const firebaseConfig= {
    apiKey: "AIzaSyA2Qzp-zN8nKLlar3szKnh628-HEakYbEY",
    authDomain: "projectnavigation-ce69a.firebaseapp.com",
    projectId: "projectnavigation-ce69a",
    storageBucket: "projectnavigation-ce69a.appspot.com",
    messagingSenderId: "162920140459",
    appId: "1:162920140459:web:f926eb25db070428ae71ee"

}
if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();

}


const db = firebase.firestore()

export default db;