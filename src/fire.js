import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const config = {
  apiKey: "AIzaSyDxFmfmesctqNNkxNaPfYLUQypsiFgsh5c",
  authDomain: "fck-site.firebaseapp.com",
  databaseURL: "https://fck-site.firebaseio.com",
  projectId: "fck-site",
  storageBucket: "fck-site.appspot.com",
  messagingSenderId: "1017854360689"
};
firebase.initializeApp(config);
const db = firebase.firestore();
const storage = firebase.storage();
export const storageRef = storage.ref();
export const database = db.collection("players");


;
