import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged out!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/my-event">My Event</NavLink>
      <NavLink to="/manage-event">Manage Event</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-lg font-medium rounded-box z-1 mt-3 w-52 p-2 shadow space-y-4"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wider text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text"
        >
          SportSync
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-medium space-x-6 [&>a]:px-2 [&>a]:py-0.5 [&>a.active]:bg-gradient-to-r [&>a.active]:from-orange-500 [&>a.active]:to-red-600 [&>a.active]:text-white [&>a]:rounded">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link
            onClick={handleLogout}
            className="btn bg-gradient-to-r from-orange-500 to-red-600  text-white text-lg"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
