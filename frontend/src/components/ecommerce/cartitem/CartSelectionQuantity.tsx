import { memo } from "react";
import arrowselect from "@assets/svg/selection-arrow.svg";

type TCartSelectionQuantityProps = {
  quantity: number;
  handleChange: (quantity: number) => void;
  max: number;
};
const CartSelectionQuantity = ({
  quantity,
  handleChange,
  max,
}: TCartSelectionQuantityProps) => {
  /* make option for seleect item quantity === max quantity user can check it  */
  const options = Array(max)
    .fill(0)
    .map((_, idx) => (
      <option key={idx} value={++idx}>
        {idx}
      </option>
    ));

  return (
    <div className="relative   w-14  ">
      <select
        className="appearance-none w-full   p-2 rounded outline-none cursor-pointer bg-slate-200"
        onChange={(e) => {
          handleChange(+e.target.value);
        }}
        value={quantity}
      >
        {options}
      </select>

      {/* custom arrow for select product quantity*/}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <img src={arrowselect} alt="arrow" className="w-3 h-3" />
      </div>
    </div>
  );
};

export default memo(CartSelectionQuantity);
