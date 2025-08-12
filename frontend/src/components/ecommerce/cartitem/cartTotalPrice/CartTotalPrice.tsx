import { cartTotalItemsPrice } from "@store/cart/cartSlice";
import { useAppSelector } from "@store/hooks";
const CartTotalPrice = () => {
  const totalProductItemsPrice = useAppSelector(cartTotalItemsPrice);
  return (
    <>
      {totalProductItemsPrice > 0 ? (
        <div className="flex gap-24 justify-between">
          <h1 className="text-2xl font-serif font-medium text-green-800 capitalize">
            total price :
          </h1>
          <p className="text-xl font-semibold text-gray-800">
            $ {totalProductItemsPrice.toFixed(2)}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CartTotalPrice;
