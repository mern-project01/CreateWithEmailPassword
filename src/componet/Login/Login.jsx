import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import app from "../firebase/firebase.config";
import { FacebookAuthProvider } from "firebase/auth";

const Login = () => {

  const auth = getAuth(app);

const provider = new FacebookAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const text = "password:";
    // console.log(email,text, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log("sucsessfull");
        console.log(user);
      })
      .catch((rr) => {
        console.log(rr);
      });
  };
  const facebook = () => {
    // console.log("facebook");


    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
    
  }
  return (
    <div>
      <h1 className="text-5xl text-center  text-yellow-600">Login</h1>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content ">
          <div className="card bg-base-100 w-[480px]  shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label>
                  <NavLink to="">forget password</NavLink>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
                <button onClick={facebook} className="btn btn-accent">Login with facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
