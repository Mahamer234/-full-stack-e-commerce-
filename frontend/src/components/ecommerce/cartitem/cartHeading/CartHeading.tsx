import Arrow from "@assets/svg/arrow.svg?react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const CartHeading = () => {
  const navigate = useNavigate();
  return (
    <div className="flex   items-center  pb-4 border-green-800  border-b-2 ">
      <button
        className="-ml-8 hover:cursor-pointer"
        onClick={() => {
          navigate("/categories");
        }}
      >
        <Arrow />
      </button>
      <p className="text-2xl font-semibold font-serif">Continue Shopping</p>
    </div>
  );
};

export default memo(CartHeading);
