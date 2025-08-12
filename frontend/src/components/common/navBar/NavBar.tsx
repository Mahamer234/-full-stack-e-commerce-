import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import HoverDropdown from "../HoverDropdown";

const NavBar = () => {
  const { accessToken, user } = useAppSelector((state) => state.auth);

  return (
    <>
      <nav className="flex  justify-between bg-green-500  p-2 text-xl text-white rounded-md shadow-lg">
        <ul className="flex  gap-4 font-Inter">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-gray-800" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? "text-gray-800" : "hover:text-yellow-200 transition"
              }
            >
              catogeries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "text-gray-800" : "hover:text-yellow-200 transition"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        {/* if user is not authintication show login and register  */}
        {/* if user is authintication show welcome user name  */}
        {!accessToken ? (
          <ul className=" flex  gap-6  ">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-800"
                    : "hover:text-yellow-200 transition"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-800"
                    : "hover:text-yellow-200 transition"
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        ) : (
          /* if user is authintication welcome user name  */
          <div className="flex items-center gap-2">
            <p className="capitalize text-xl ">
              Welcome
              <span className="text-gray-900">
                {" "}
                {user?.firstName} {user?.lastName}{" "}
              </span>
            </p>
            <div>
              <div className="cursor-pointer relative">
                <HoverDropdown />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
