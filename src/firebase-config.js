// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,GoogleAuthProvider } from "firebase/auth";
import { useState,useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBem1zPjzi1n_enFkimZgXOPwTUBAwkPp8",
  authDomain: "naruntest-t.firebaseapp.com",
  projectId: "naruntest-t",
  storageBucket: "naruntest-t.appspot.com",
  messagingSenderId: "1086461946261",
  appId: "1:1086461946261:web:2f4e228c582812cfa06e9c",
  measurementId: "G-NLMQ989RSP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export function signup(email,password){
  return createUserWithEmailAndPassword(auth, email,password);
}
export function logout(){
  return signOut(auth);
}
export function useAuth(){
  const  [currentUser, setCurrentUser] = useState();
  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;

  },[])
  return currentUser;
}
export const provider = new GoogleAuthProvider();