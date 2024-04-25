import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-[90%] mt-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            Roaming <span className="text-[#e55039]">Ventures</span>
          </a>
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
              <button className=" btn bg-[#e55039] hover:bg-[#b71510] text-white">
                <Link to={"/login"}>Login</Link>
              </button>
            </li>
            <li>
              <button className=" btn bg-[#4a69bd] hover:bg-[#1e3799] text-white">
                <Link to={"/register"}>Register</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
