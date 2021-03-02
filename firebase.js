// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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