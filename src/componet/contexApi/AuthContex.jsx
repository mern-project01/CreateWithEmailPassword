import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";



//export authcontex
export const UserContex = createContext({});
//end export
//start Authcomponet
const AuthContex = ({ children }) => {
  //auth provider
  const auth = getAuth(app);
  // from chatgpt
  //for user
  const [user, setUser] = useState({}); // Tracks the currently signed-in user
  // const [loading, setLoading] = useState(true); // Tracks loading state for authentication
  // chatgpt
  console.log(user);
  //for user signIn activation
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading once the user state is resolved
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, [auth]);
  // chatgpt end
//for user create with email,password and name
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //for signIn with email,password
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //signIN with google
  const HandleSignWithGoogle = () => {
    const provider = new GoogleAuthProvider()
  return signInWithPopup(auth, provider)
   
  }
  //now it will be work on login.jsx
  //for logOut
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {});
  };
//for sending data by useing contex
  const userInfo = {
    createUser,
    singIn,
    user,
    HandleSignOut,
    HandleSignWithGoogle,
  };

  return <UserContex.Provider value={userInfo}>{children}</UserContex.Provider>;
};

export default AuthContex;
