// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
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
    getDocs,
    arrayUnion,
    arrayRemove,
    where
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

// Initialize Firebase & Authentication Provider
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();


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

async function saveUserToDb(user) {
  const docRef = doc(db, 'users', `${user.uid}`);
  const docSnap = await getDoc(docRef);

  //checking if user already exists
  if (docSnap.exists()) {
    //user exists
  } else {
    await setDoc(doc(db, 'users', `${user.uid}`), {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      likedSongs: []
    });
  }
  return user;
}

async function addLikedSongToDB(userId, track) {
  const userDocRef = doc(db, 'users', `${userId}`);

  await updateDoc(userDocRef, {
    likedSongs: arrayUnion(track)
  });
};

async function deleteLikedSongFromDB(userId, track) {
  const userDocRef = doc(db, 'users', `${userId}`);

  await updateDoc(userDocRef, {
    likedSongs: arrayRemove(track)
  });
};

async function checkIfTrackIsLiked(userId) {
  const docRef = doc(db, 'users', `${userId}`);
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()) {
    return docSnap.data();
  } else {
    //
  }
};



export { db, getCategories, addADoc, saveUserToDb, auth, provider, addLikedSongToDB, deleteLikedSongFromDB, checkIfTrackIsLiked };