
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBlTIBtpdosaLMUYKYupYugT53oQN4_9aE",
  authDomain: "fast-and-yummy.firebaseapp.com",
  projectId: "fast-and-yummy",
  storageBucket: "fast-and-yummy.appspot.com",
  messagingSenderId: "192347370236",
  appId: "1:192347370236:web:3022743959f6bd81b85d79"
};

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
