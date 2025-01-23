import React, { useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firbase/Firbase.config';

const Authentication = () => {
  const [NewUser,setNewUser] =useState({})
  const provider = new GoogleAuthProvider();
  const GitProvider= new GithubAuthProvider()
const auth = getAuth(app);
  const handleByGamil = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setNewUser(user);
    })
    .catch((err) => {
     
    console.log(err)
    });

  }
  function handleByGithub() {
    // signInWithPopup(auth, GitProvider)
    //   .then((result) => {
    //     const longinUser = result.user;
    //     setNewUser(longinUser);
    //   }).catch((err) => {
    //   console.log(err);
      
    // })

    signInWithPopup(auth, GitProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setNewUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(NewUser)
  return (
    <div>
      <h1>User Name:{NewUser?.displayName || NewUser?.uid} </h1>
        <div className='text-center'>
            <button onClick={handleByGamil} className='btn btn-success my-20'>Login With Google</button>
            <button onClick={handleByGithub} className='btn btn-secondary mx-2 my-20'>Login With Github</button>
        </div>
      </div>
      
    );
};

export default Authentication;