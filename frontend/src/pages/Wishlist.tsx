import { useEffect } from "react";
import { actGetWishllistProducts } from "../store/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import WishlistHeader from "../components/ecommerce/wishlist/WishlistHeader";
import WishlistTable from "../components/ecommerce/wishlist/WishlistTable ";
import { toast } from "react-toastify";
const Wishlist = () => {
  const { error, wishListProducts, items } = useAppSelector(
    (state) => state.wishlist
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    /*  if (items.length === 0) {
      toast.warning("Your wishlist is empty");
      return;
    } */

    dispatch(actGetWishllistProducts("productsFullInfo"));
  }, [dispatch, items.length]);

  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      {/* WishlistHeader */}
      <WishlistHeader />
      <WishlistTable products={wishListProducts} />
    </div>
  );
};

export default Wishlist;
