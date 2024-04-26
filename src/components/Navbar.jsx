import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Signed Out");
        toast.success("User logged out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mx-auto max-w-[90%] mt-6">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            Roaming <span className="text-[#e55039]">Ventures</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex items-center gap-4 px-1">
            <li>
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
            <li>
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
            <li>
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
            <li>
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
            <li>
              {user ? (
                <div className="flex gap-4 items-center">
                  <img
                    className="rounded-full w-10 "
                    src={user.photoURL}
                    alt="pro-pic"
                  />
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
