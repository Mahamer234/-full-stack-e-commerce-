import { memo } from "react";

const CartItemDescreption = ({
  cat_prefix,
  title,
}: {
  cat_prefix: string;
  title: string;
}) => {
  return (
    <div className="sm:basis-2/6">
      <h3 className="text-gray-950 text-xl font-mono font-semibold ">
        {cat_prefix}
      </h3>
      <p className="text-gray-600 text-lg font-mono font-medium ">{title}</p>
    </div>
  );
};

export default memo(CartItemDescreption);
