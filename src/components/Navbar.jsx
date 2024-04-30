import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import NavbarIconResponsive from "./NavbarIconResponsive";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark"))
  );
  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("User logged out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className=" py-4 shadow-lg">
      <div className="mx-auto max-w-[90%] ">
        <div className="navbar bg-base-100">
          <div className="flex-1 lg:flex-none lg:hidden">
            <NavbarIconResponsive></NavbarIconResponsive>
          </div>
          <div className="lg:flex-1 lg:flex hidden">
            <Link to={"/"} className="btn btn-ghost text-xl">
              Roaming <span className="text-[#e55039]">Ventures</span>
            </Link>
          </div>

          <div className="">
            <ul className="flex items-center gap-4 px-1">
              <li className="hidden lg:flex">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e55039] inline-block"
                      : "hover:text-[#e55039] inline-block"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hidden lg:flex">
                <NavLink
                  to={"/alltourist"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e55039] inline-block"
                      : "hover:text-[#e55039] inline-block"
                  }
                >
                  All Tourist Spot
                </NavLink>
              </li>
              <li className="hidden lg:flex">
                <NavLink
                  to={"/addtourist"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e55039] inline-block"
                      : "hover:text-[#e55039] inline-block"
                  }
                >
                  Add Tourist Spot
                </NavLink>
              </li>
              <li className="hidden lg:flex">
                <NavLink
                  to={"/mylist"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e55039] inline-block"
                      : "hover:text-[#e55039] inline-block"
                  }
                >
                  My List
                </NavLink>
              </li>
              <div className="flex items-center justify-center">
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    checked={isdark}
                    className="theme-controller"
                    value="synthwave"
                    onChange={() => setIsdark(!isdark)}
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              <div className="flex items-center gap-4">
                <li>
                  {user ? (
                    <div className="flex gap-4 items-center">
                      <a className="pro-pic">
                        <img
                          className="rounded-full w-10 h-10 "
                          src={user.photoURL}
                          alt="pro-pic"
                        />
                        <Tooltip anchorSelect=".pro-pic" place="top">
                          {user.displayName}
                        </Tooltip>
                      </a>
                      <button
                        onClick={handleSignOut}
                        className="btn bg-[#e55039] text-white hover:bg-[#b71510]"
                      >
                        Log Out
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={"/login"}
                      className="btn bg-[#e55039] text-white hover:bg-[#b71510]"
                    >
                      Login
                    </Link>
                  )}
                </li>
                <li>
                  {user ? null : (
                    <button className=" btn bg-[#4a69bd] hover:bg-[#1e3799] text-white">
                      <Link to={"/register"}>Register</Link>
                    </button>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
