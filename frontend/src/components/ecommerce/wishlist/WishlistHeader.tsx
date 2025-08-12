import WishlistLogo from "@assets/svg/like-fill.svg?react";
import Arrow from "@assets/svg/arrow.svg?react";
import { useNavigate } from "react-router-dom";
const WishlistHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  flex-col  gap-4 justify-center items-center bt  pt-20 sm:py-12   relative ">
      {/* arrow going continue to shoping  */}
      <div className="absolute left-4 top-4 flex items-center">
        <button
          onClick={() => {
            navigate("/categories");
          }}
        >
          <Arrow />
        </button>
        <h3 className="text-2xl capitalize  font-serif text-gray-900">
          Continue Shopping
        </h3>
      </div>
      {/* wishlist logo animated  */}
      <div className="animate-customPing-infinte  ">
        <WishlistLogo />
      </div>
      <h1 className="text-4xl  font-serif text-green-700">My wishlist </h1>
    </div>
  );
};

export default WishlistHeader;
