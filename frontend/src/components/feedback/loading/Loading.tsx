import type { Shared } from "@types/shared";
import CatogerySkeleton from "../skeleton/catogeryskeleton/CatogerySkeleton";
import ProductSkeleton from "../skeleton/productSkeleton/ProductSkeleton";
import CartSkeleton from "../skeleton/cartSkeleton/CartSkeleton";
import LottiHandelr from "../lottiHandler/LottiHandelr";

const skeletonsTypes = {
  category: CatogerySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};
type LoadingProps = {
  children?: React.ReactNode;
  status?: Shared;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({ children, status, type = "category" }: LoadingProps) => {
  const Component = skeletonsTypes[type];
  if (status === "pending") {
    return <Component />;
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center">
        <LottiHandelr type="errorLotti" />{" "}
      </div>
    );
  }

  if (status === "succeeded") {
    return <div className="loading-success">{children}</div>;
  }
};

export default Loading;
