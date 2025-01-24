import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContex } from "../contexApi/AuthContex";

const Login = () => {

  const { singIn, HandleSignWithGoogle, forgetPassword } =
    useContext(UserContex);
  const [error, setError] = useState('')
  const [showPassword, setShowPassowrd] = useState(false)
  const [Email,setEmail]=useState('')

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const text = "password:";
// console.log(email,text, password);
    singIn(email,password)
      .then((result) => {
        const user = result.user;
        // console.log("sucsessfull");
        // console.log(user);
        form.reset();
        alert("login sucsessfully")
      })
      .catch((err) => {
        // console.log(rr);
        setError(err)
      });
  };
  const handleOnBlur = (event) => {
    const email = event.target.value;
    setEmail(email)
    console.log(Email)
   
      
    
    
  }
  const HandlePassReset = () => {
    if (!Email) {
      alert("Please filup the email name:")
      return
    }
    forgetPassword(Email)
     .then(() => {
            // Password reset email sent!
       // ..
       
       alert("chake email")
          })
          .catch((error) => {
            
          });
    
  }
  
  const handleGoogle= () => {
    HandleSignWithGoogle()
      .then((result) => {
         const googleUser = result.user;
         // setUser(user)
         alert("login sucsesfull", googleUser?.displayName);
       }).catch((error) => {
         setError(error);
       });
  }
 
  return (
    <div>
      <h1 className="text-5xl text-center pt-3 bg-base-100 text-yellow-600">
        Login{" "}
      </h1>
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
                  onBlur={handleOnBlur}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label>
                  <button
                    onClick={HandlePassReset}
                    className="label-text-alt link link-hover"
                  >
                    forget password
                  </button>
                  {error && <p className="text-red-600"> {error} </p>}
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
          <button onClick={handleGoogle} className="btn btn-accent">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
