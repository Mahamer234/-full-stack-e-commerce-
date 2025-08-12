import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import CartBasket from "./cartBasket/CartBasket";

const Header = () => {
  return (
    <>
      {/* top navbar  */}
      <div className="flex justify-between items-center py-2 ">
        <Link to={"/"}>
          <h1 className="text-3xl font-Inter text-green-900 font-semibold">
            e<span className="text-4xl text-green-600 font-bold">c</span>om
          </h1>
        </Link>
        <div className="flex  gap-4 items-center">
          <Link to={"wishlist"}>wishlist</Link>
          <CartBasket />
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
