import type React from "react";
import LottiHandelr from "../lottiHandler/LottiHandelr";
import { Suspense } from "react";

const PageSuspenseFallback = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Suspense fallback={<LottiHandelr type="pageloadingLotti" />}>
        {children}
      </Suspense>
    </div>
  );
};

export default PageSuspenseFallback;
