// Import the functions you need from the SDKs you need


// import { useState , useEffect} from "react";
// import { initializeApp } from "firebase/app";
// import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


//   export function signup(email, password){
//     return createUserWithEmailAndPassword(auth,email, password);
//   }

//   export function useAuth(){
//     const [currentUser, setCurrentUser] = useState();

//     useEffect(() =>{
//         const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
//         return unsub;
//     },[])
//     return currentUser;
//   }
//   export function logout(){
//     return signOut(auth);
//   }
//   export {
//     auth,
//     
//   };


import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBC7c0oKZR15Y57u7lUP1RATe256NU5Nwk",
    authDomain: "property-listing-app-c24b8.firebaseapp.com",
    projectId: "property-listing-app-c24b8",
    storageBucket: "property-listing-app-c24b8.appspot.com",
    messagingSenderId: "104965362671",
    appId: "1:104965362671:web:6b9423cb480e9dfdb51c1a",
    measurementId: "G-1HXF5F4TKV"
  };
  
  



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
  
};

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  onAuthStateChanged
};


