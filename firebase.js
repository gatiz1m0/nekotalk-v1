// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firabase from 'firebase';

const apikey = process.env.apikey;
const appid = process.env.appid;
const appdomain = process.env.appdomain;
const bucket = process.env.bucket;

const firebaseConfig = {
  apiKey: apikey,
  authDomain: appdomain,
  projectId: "msn-one",
  storageBucket: bucket,
  messagingSenderId: "656260507866",
  appId: appid,
  measurementId: "G-L9RRXZHJPF"
};

let app;
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }