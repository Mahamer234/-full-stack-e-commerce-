import Cart from "@assets/svg/cart.svg?react";
import { Link } from "react-router-dom";
import { cartTotalquantitySelector } from "@store/cart/cartSlice";
import { useAppSelector } from "@store/hooks";
import { memo, useEffect, useState } from "react";
import clsx from "clsx";
const CartBasket = () => {
  /* state to deturn buton disable state  */
  const [isAnimate, setisAnimate] = useState(false);

  // using useAppSelector to using selector from slice useAppSelector take function Not result of function !
  const total: number = useAppSelector(cartTotalquantitySelector);
  useEffect(() => {
    /* changing buton disable state  */
    setisAnimate(true);
    const animateTimer = setTimeout(() => {
      setisAnimate(false);
    }, 300);
    return () => {
      clearTimeout(animateTimer);
    };
  }, [total]);
  const CartLogoImage = memo(Cart);
  return (
    <>
      <Link to={"cart"}>
        <div className="flex gap-2 items-center  ">
          <div className="relative">
            <div
              className={clsx(
                "absolute  -right-3 -top-3 py-1 px-1 text-yellow-100  bg-green-600   rounded-full flex justify-center items-center h-6 w-6 shadow-lg",
                { "animate-customPing": isAnimate },
                { hidden: total <= 0 }
              )}
            >
              {total}
            </div>
            <CartLogoImage />
          </div>
          <p className="text-xl سtext-green-700">Cart</p>
        </div>
      </Link>
    </>
  );
};

export default memo(CartBasket);
