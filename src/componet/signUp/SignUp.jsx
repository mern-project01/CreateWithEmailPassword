import React, { useContext, useState } from "react";
import { UserContex } from "../contexApi/AuthContex";

const SignUp = () => {
  const { createUser, handleUpdate, user, loading } = useContext(UserContex);
  // const [user,setUser]=useState({})
  const [err, setErr] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      setErr("must use a capital letter");
    } else {
      setErr("");

      createUser(email, password)
        .then((result) => {
          const createUser = result.user;
          // console.log(createUser)

          handleUpdate(name);
          form.reset();
          alert("Create Account sucsessfull");
        })
        .catch((error) => {
          console.log(error);
          setErr(error.message);
        });
    }
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content ">
          <div className="card bg-base-100 w-[480px]  shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name </span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                {err && <p className="text-red-500">{err} </p>}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
