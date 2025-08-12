import type { Tproduct } from "@types/product";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useCallback, useEffect, useState } from "react";
import Like from "@assets/svg/like.svg?react";
import Filllike from "@assets/svg/like-fill.svg?react";
import { actToggleWishlist } from "@store/wishlist/wishlistSlice";
import clsx from "clsx";
/* Tproduct props type  */
type TProductProps = Tproduct;
const Product = ({
  id,
  cat_prefix,
  img,
  max,
  price,
  title,
  quantity,
  isLike,
}: TProductProps) => {
  const [isDisabled, setisDisabled] = useState(false);
  const dispatch = useAppDispatch();
  /* quantity of product added to cart  */
  /*   const productQantityadd = useAppSelector((state) => state.cart.items[id]);  */

  /* max product naumber added to cart   */
  const maxItemadded = max - quantity === 0 ? true : false;
  /* handle add to cart  and set isdisabled true  */
  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(id));
    setisDisabled(true);
  }, [dispatch, id]);
  /* handleAddtoWishlist  */
  const handleAddtoWishlist = useCallback(() => {
    dispatch(actToggleWishlist(id));
  }, [id, dispatch]);

  useEffect(() => {
    /* IF is disabled false return */
    if (!isDisabled) return;
    const timer = setTimeout(() => {
      setisDisabled(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [isDisabled]);
  return (
    <>
      <div className=" relative text-gray-950  rounded-lg shadow-lg w-60 bg-gray-100">
        {/* whishlist icon  toggle */}
        <button
          className="absolute  right-2 top-2 hover:scale-110  hover:rotate-6 transition-transform duration-100"
          onClick={handleAddtoWishlist}
        >
          {isLike ? <Filllike /> : <Like />}
        </button>
        <div className="  overflow-hidden">
          <img
            src={
              "https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg"
            }
            alt={title}
            className="w-full  object-cover  rounded-t-md mb-4 aspect-1/1.2"
          />
        </div>
        {/* content div  */}
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 mb-2">Category: {cat_prefix}</p>
          <p className="text-lg font-bold mb-2">Price: ${price}</p>
          <button
            disabled={isDisabled || maxItemadded}
            onClick={handleAddToCart}
            className={clsx(
              "bg-green-500 text-gray-950 font-mono px-4 py-2 rounded hover:bg-green-600 transition duration-300",
              {
                "opacity-50 cursor-not-allowed disabled":
                  isDisabled || maxItemadded,
              }
            )}
          >
            {isDisabled ? (
              <div className="flex gap-2 justify-center items-center">
                <div className="animate-spin rounded-full  h-4 w-4 border-t-2 border-green-950 border-r-2"></div>
                <p>Adding...</p>
              </div>
            ) : maxItemadded ? (
              "max item added"
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Product);
