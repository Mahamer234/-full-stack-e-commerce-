import { NavLink } from "react-router-dom";
import Dropdown from "../../assets/svg/dropdown.svg?react";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/auth/authSlice";
export default function HoverDropdown() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative inline-block text-left  group z-50 ">
      <Dropdown />

      {/* Dropdown menu */}
      <div
        className="absolute -left-32 mt-2 w-40 bg-green-700 border rounded-lg shadow-lg 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300"
      >
        <NavLink
          to="/porfile"
          className="block px-4 py-2 hover:bg-gray-400 rounded-t-lg "
        >
          Profile
        </NavLink>
        <NavLink to="/orders" className="block px-4 py-2 hover:bg-gray-400">
          Orders
        </NavLink>
        <hr />
        <NavLink
          to=""
          onClick={() => {
            dispatch(logout());
          }}
          className="block px-4 py-2 hover:bg-gray-400 rounded-b-lg "
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
}
