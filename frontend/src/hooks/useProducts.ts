import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  actGetProductsByPrefix,
  resetProducts,
} from "@store/products/productSlice";
import type { Tproduct } from "../types/product";
import type { RootState } from "../store";

const UseProducts = () => {
  const params = useParams();
  const prefix = params.prefix;
  const dispatch = useAppDispatch();
  const { records, loading } = useAppSelector(
    (state: RootState) => state.products
  );
  const cartitems: { [key: string]: number } = useAppSelector(
    (state: RootState) => state.cart.items
  );

  const wishlistItems: number[] = useAppSelector(
    (state: RootState) => state.wishlist.items
  );
  useEffect(() => {
    dispatch(actGetProductsByPrefix(prefix));
    return () => {
      // Optionally reset products when component unmounts
      dispatch(resetProducts());
    };
  }, [prefix, dispatch]);

  const productFullInfo = records.map((product: Tproduct) => ({
    ...product,
    quantity: cartitems[product.id],
    isLike: wishlistItems.includes(product.id),
  }));
  return { productFullInfo, loading, prefix };
};

export default UseProducts;
