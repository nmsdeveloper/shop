import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

import {
  getFirestore,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  getDoc,
  getDocs,
  query,
  doc,
  collection,
  arrayUnion,
  where,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDV8sl8RdB4S79kq1XRDy78nxMsHgqUJLk",
  authDomain: "shop-f08fd.firebaseapp.com",
  projectId: "shop-f08fd",
  storageBucket: "shop-f08fd.appspot.com",
  messagingSenderId: "556619595724",
  appId: "1:556619595724:web:2ce4373f378382b1e06769",
  measurementId: "G-H93KL4XL2H",
};

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

/* Authen */

/* Firestore */
/* Take Query */
async function getCollections(colId) {}
async function getDocuments(docId) {}
async function getQueryWhere(colId, field, value) {}

/* Push Query */
async function setCollections() {}
async function setDocuments() {}
async function setQueryWhere(colId, field, value) {}

/* Storage */
