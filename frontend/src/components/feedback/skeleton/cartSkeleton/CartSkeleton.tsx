import ContentLoader from "react-content-loader";

const skeletonRender = Array(2)
  .fill(0)
  .map((_, idx) => {
    return (
      <ContentLoader
        key={idx}
        speed={1}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#dddada"
        foregroundColor="#f0f0f0"
      >
        <rect x="126" y="50" rx="3" ry="3" width="88" height="6" />
        <rect x="126" y="33" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="4" rx="0" ry="0" width="94" height="95" />
        <rect x="261" y="34" rx="0" ry="0" width="54" height="26" />
        <rect x="350" y="44" rx="3" ry="3" width="52" height="6" />
        <rect x="443" y="36" rx="0" ry="0" width="19" height="18" />
      </ContentLoader>
    );
  });
const CartSkeleton = () => {
  return <div className="mr-28">{skeletonRender}</div>;
};

export default CartSkeleton;
