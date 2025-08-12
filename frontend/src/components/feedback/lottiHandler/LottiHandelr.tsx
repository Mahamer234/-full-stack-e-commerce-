import Lottie from "lottie-react";

import notfontLotti from "@assets/lottiefiles/Page Not Found 404.json";
import errorLotti from "@assets/lottiefiles/Questioning.json";
import cartEmptyLotti from "@assets/lottiefiles/Shopping Cart Loader.json";
import loadingLotti from "@assets/lottiefiles/loading.json";
import pageloadingLotti from "@assets/lottiefiles/Loading 40 _ Paperplane.json";

const lottiTyps = {
  notfontLotti,
  errorLotti,
  cartEmptyLotti,
  loadingLotti,
  pageloadingLotti,
};

type LottiHandelrProps = {
  type: keyof typeof lottiTyps;
  className?: string;
};
const LottiHandelr = ({
  type,
  className = "flex items-center justify-center h-[calc(100vh-200px)]  sm:h-[calc(100vh-400px)] ",
}: LottiHandelrProps) => {
  const lotteanimation = lottiTyps[type];
  return (
    <div className={className}>
      <Lottie
        animationData={lotteanimation}
        style={{ height: "300px ", width: "300px" }}
      />
    </div>
  );
};

export default LottiHandelr;
