import { useCallback, useEffect } from "react";
import {
  actGetFullProductsInfo,
  removeItemFromCart,
  changeItemQuantity,
  resetCart,
} from "@store/cart/cartSlice";
import CartHeading from "@components/ecommerce/cartitem/cartHeading/CartHeading";
import CartTotalPrice from "../components/ecommerce/cartitem/cartTotalPrice/CartTotalPrice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
/* selector */
import { cartTotalquantitySelector } from "../store/cart/cartSlice";
import CartItemList from "../components/ecommerce/cartItemList/CartItemList";
import Loading from "../components/feedback/loading/Loading";
import LottiHandelr from "../components/feedback/lottiHandler/LottiHandelr";
import { cartTotalItemsPrice } from "@store/cart/cartSlice";
import actPlaceOrders from "../store/orders/act/actPlaceOrders";
import { toast } from "react-toastify";

/* ------------ start cart componnent ---------------  */

const Cart = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);
  /* selector for  --- > cartTotalquantity*/
  const totalCartQuantity = useAppSelector(cartTotalquantitySelector);
  /* get  fullcart Products uuser add it to cart  */
  const { loading, fullproductsInfo } = useAppSelector((state) => state.cart);

  /* handle change quantity for item by id & quantity  */
  const handleChangeQuantity = useCallback(
    (id: number, quantity: number) => {
      dispatch(changeItemQuantity(id, quantity));
    },
    [dispatch]
  );
  const totalProductItemsPrice: number = useAppSelector(cartTotalItemsPrice);
  /* handle place order */
  /* this function will be used to place order */
  const handlePlaceOrder = () => {
    if (totalProductItemsPrice > 0) {
      dispatch(actPlaceOrders(totalProductItemsPrice))
        .unwrap()
        .then(() => {
          dispatch(resetCart());
          toast.success("Order placed successfully!");
        });
    } else {
      alert("Your cart is empty, please add items to place an order.");
    }
  };
  /* using  actGetFullProductsInfo function to get all cart product from back end */
  useEffect(() => {
    dispatch(actGetFullProductsInfo());
  }, [dispatch]);

  /* handle delete item from cart by id  */
  const handleCartItemDelete = useCallback(
    (id: number) => {
      dispatch(removeItemFromCart(id));
    },
    [dispatch]
  );

  return (
    <>
      <div className="pt-4 mx-6 ">
        {/* heading  */}
        <CartHeading />
        {/* header  */}
        <div className=" my-4  md:my-6">
          <h3 className="text-2xl font-serif font-semibold ">shopping cart</h3>
          <p className="text-2xl first-letter:text-green-900 font-serif ">
            You have{" "}
            <span className="text-2xl text-green-900 ">
              {totalCartQuantity}
            </span>
            Item in your cart.
          </p>
        </div>
        <Loading status={loading} type={"cart"}>
          {fullproductsInfo.length === 0 ? (
            /* <p className="text-lg text-gray-600 font-serif ">
              Your cart is empty.
            </p> */
            <div className=" flex justify-center items-center  ">
              <LottiHandelr type={"cartEmptyLotti"} />
            </div>
          ) : (
            <div className="mr-28">
              <CartItemList
                records={fullproductsInfo}
                handleCartItemDelete={handleCartItemDelete}
                handleChangeQuantity={handleChangeQuantity}
              />
              {/* cart total price componnent  */}
              <CartTotalPrice />
              {/* PLACE ORDER BUTTON  */}
              {accessToken && (
                <button
                  className="bg-green-600 p-3 rounded-lg mt-8 text-xl text-yellow-50 capitalize  hover:text-green-400 hover:bg-slate-800 transition-all duration-300 ease-in-out"
                  onClick={handlePlaceOrder}
                >
                  place order{" "}
                </button>
              )}
            </div>
          )}
        </Loading>
      </div>
    </>
  );
};

export default Cart;
