import type { Tproduct } from "@types/product";
import CartItem from "../cartitem/CartItem";
import { memo } from "react";

type CartItemListProps = {
  records: Tproduct[];
  handleCartItemDelete: (id: number) => void;
  handleChangeQuantity: (id: number, quantity: number) => void;
};

const CartItemList = ({
  records,
  handleCartItemDelete,
  handleChangeQuantity,
}: CartItemListProps) => {
  /* render item */
  const renderItem = records.map((record) => (
    <CartItem
      {...record}
      key={record.id}
      handleCartItemDelete={handleCartItemDelete}
      handleChangeQuantity={handleChangeQuantity}
    />
  ));

  return <div>{renderItem}</div>;
};

CartItemList.displayName =
  "CartItemList"; /* to display componnent in React DevTools as CartItemList not memo   */

export default memo(CartItemList);
