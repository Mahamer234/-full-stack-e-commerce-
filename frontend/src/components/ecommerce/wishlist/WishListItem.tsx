import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import type { Tproduct } from "../../../types/product";
import { addToCart } from "../../../store/cart/cartSlice";
import clsx from "clsx";
import { memo } from "react";

const WishListItem = ({ id, cat_prefix, img, max, price, title }: Tproduct) => {
  const dispatch = useAppDispatch();
  //const productAddedQuantity = useAppSelector((state) => state.cart.items);
  const quantity = useAppSelector((state) => state.cart.items[id] ?? 0);
  const maxIsAdded = quantity >= max;

  return (
    <tr className="border-b border-green-800">
      <td className="p-6 ">
        <div className="flex items-center gap-3 ">
          <div className="h-14 w-14 bg-green-500  rounded-br-2xl  rounded-tl-2xl ">
            <img
              src={img}
              alt={title}
              draggable={false}
              className="h-12 w-12  rounded-br-2xl  rounded-tl-2xl "
            />
          </div>
          <span className="text-xl font-serif text-gray-800  capitalize">
            {cat_prefix}
          </span>
        </div>
      </td>
      <td className="text-xl font-serif text-gray-800  capitalize">${price}</td>
      <td className="text-xl font-serif text-gray-800  capitalize">
        {max > 0 ? "In Stock" : "Out of Stock"}
      </td>
      <td>
        <button
          className={clsx(
            "bg-green-700 text-white px-3 py-1 rounded text-sm  font-serif    capitalize",
            {
              "cursor-not-allowed bg-green-200": maxIsAdded,
            }
          )}
          onClick={() => dispatch(addToCart(id))}
          title={maxIsAdded ? "Maximum quantity added" : ""}
          disabled={maxIsAdded}
        >
          Add to Cart
        </button>
      </td>
    </tr>
  );
};

export default memo(WishListItem);
