


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh6WT7PL4EQKVMJiTsbhLVH4SkTFrygOM",
  authDomain: "uber-clone-1725d.firebaseapp.com",
  projectId: "uber-clone-1725d",
  storageBucket: "uber-clone-1725d.appspot.com",
  messagingSenderId: "649807700950",
  appId: "1:649807700950:web:869e633fdf83decdf73a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}