import { memo } from "react";

type TCartItemImageProps = { img: string; title: string };
const CartItemImage = ({ img, title }: TCartItemImageProps) => {
  return (
    <div className=" w-24  h-24 p-[1px] bg-green-400 rounded-md">
      <img src={img} alt={title} className="w-full rounded-md" />
    </div>
  );
};

export default memo(CartItemImage);
