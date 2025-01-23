import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContex } from '../contexApi/AuthContex';

const Nav = () => {
  const {user,HandleSignOut}=useContext(UserContex)
    const UlItem = (
        <>
            <li>
                <Link to="/">Home</Link>
                
            </li>
            <li>
                <Link to="/privetrout">{user?.displayName} </Link>
                
            </li>
            <li>
                <Link to="singup">Singup</Link>

            </li>
            <li>
                <Link to="/login">Login</Link>

            </li>
        </>
    )
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {UlItem}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Auth with input</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{UlItem}</ul>
          </div>

          <div className="navebar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>{user?.email} </a>
                </li>
                <li>
                  <button onClick={HandleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Nav;