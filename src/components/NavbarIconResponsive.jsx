import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NavbarIconResponsive = () => {
  return (
    <div>
      <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Button className="bg-[#e55039] text-white"> Menu</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem className="hover:text-[#e55039] ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-[#e55039] block" : "hover:text-[#e55039] block"
              }
            >
              Home
            </NavLink>
          </MenuItem>
          <MenuItem className="hover:text-[#e55039] ">
            <NavLink
              to={"/alltourist"}
              className={({ isActive }) =>
                isActive ? "text-[#e55039] block" : "hover:text-[#e55039] block"
              }
            >
              All Tourist Spot
            </NavLink>
          </MenuItem>
          <MenuItem className="hover:text-[#e55039] ">
            <NavLink
              to={"/addtourist"}
              className={({ isActive }) =>
                isActive ? "text-[#e55039] block" : "hover:text-[#e55039] block"
              }
            >
              Add Tourist Spot
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to={"/mylist"}
              className={({ isActive }) =>
                isActive ? "text-[#e55039] block" : "hover:text-[#e55039] block"
              }
            >
              My List
            </NavLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavbarIconResponsive;
