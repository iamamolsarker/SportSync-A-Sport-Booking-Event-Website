import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

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
        // console.log(error);
        Swal.fire({
          title: `${error.message}`,
          icon: "error",
        });
      });
  };

  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-event">All Events</NavLink>
      <NavLink to="/my-event">My Bookings</NavLink>
      <NavLink to="/manage-event">Manage Event</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm z-50 sticky top-0 block">
      <div className="max-w-[1300px] mx-auto flex justify-between">
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
            <>
              <img
                src={user.photoURL}
                alt=""
                data-tooltip-id="profile-img-tooltip"
                data-tooltip-content={`${user.displayName}`}
                className="w-[50px] h-[50px] object-contain mr-1 border border-gray-200 rounded-full"
              />
              <Link
                onClick={handleLogout}
                className="btn bg-gradient-to-r from-orange-500 to-red-600  text-white text-lg"
              >
                Logout
              </Link>
            </>
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
      <Tooltip id="profile-img-tooltip"></Tooltip>
    </div>
  );
};

export default Header;
