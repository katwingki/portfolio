import firebase from 'firebase';
import apiKeys from "../config/keys";

const firebaseApp = firebase.initializeApp(apiKeys.firebaseConfig);

const db = firebaseApp.firestore();

export { db };
