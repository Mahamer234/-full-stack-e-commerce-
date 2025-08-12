import type { Tproduct } from "@types/product";
import DeleteIcon from "@assets/svg/Trash Can.svg?react";
import { useAppSelector } from "@store/hooks";
import {
  CartItemImage,
  CartItemDescreption,
  CartSelectionQuantity,
} from "./index";
import type { RootState } from "@store";
import { memo, useCallback } from "react";
type cartitemProps = Tproduct & {
  handleCartItemDelete: (id: number) => void;
  handleChangeQuantity: (id: number, quantity: number) => void;
};

const CartItem = memo(
  ({
    id,
    max,
    img,
    cat_prefix,
    price,
    title,
    handleCartItemDelete,
    handleChangeQuantity,
  }: cartitemProps) => {
    /* quantity of product in store  */
    const quantity: number = useAppSelector(
      (state: RootState) => state.cart.items[id]
    );

    /* handleChangeQuantity id from cartitem props and quantity from select targer */
    const handleChange = useCallback(
      (quantity: number) => {
        handleChangeQuantity({ id: id, quantity: quantity });
      },
      [id, handleChangeQuantity]
    );
    const DeleteIconItem = memo(DeleteIcon);
    return (
      <div className="flex flex-wrap gap-1 sm:gap-4  justify-between items-center border bg-gray-100  p-2 sm:p-4 mb-8 rounded-3xl shadow-lg ">
        {/* image */}
        <CartItemImage img={img} title={title} />
        {/* namenad title */}
        <CartItemDescreption cat_prefix={cat_prefix} title={title} />
        {/* selectoption */}
        <CartSelectionQuantity
          quantity={quantity}
          max={max}
          handleChange={handleChange}
        />
        {/* price */}
        <p>{price}</p>
        {/* delete icon to delete product from cart  */}
        <div
          className="cursor-pointer hover:scale-105 hover:rotate-6 transition-all duration-200"
          onClick={() => {
            handleCartItemDelete(id);
          }}
        >
          <DeleteIconItem />
        </div>
      </div>
    );
  }
);

export default CartItem;
