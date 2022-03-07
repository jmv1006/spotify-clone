// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
    getDoc,
    getDocs
  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtTgHxoJpncmtchE6rifYLBSxdlC3LzOE",
  authDomain: "spotify-clone-f7337.firebaseapp.com",
  projectId: "spotify-clone-f7337",
  storageBucket: "spotify-clone-f7337.appspot.com",
  messagingSenderId: "320996362411",
  appId: "1:320996362411:web:98885d2def1fbfda190fee",
  measurementId: "G-KD643FMKL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addADoc(name, playlists) {
  await setDoc(doc(db, 'categories', `${name}`), {
    name: name,
    playlists: playlists
  });
};

async function getCategories(db) {
  const categoriesRef = collection(db, "categories");
  const getCategoryDocs = await getDocs(categoriesRef);
  const categoriesRetrieved = getCategoryDocs.docs.map(category => category.data());
  return categoriesRetrieved;
}

export { db, getCategories, addADoc };