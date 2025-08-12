import ContentLoader from "react-content-loader";
const skeletonRender = Array(3)
  .fill(0)
  .map((_, idx) => {
    return (
      <ContentLoader
        key={idx}
        viewBox="0 0  220 400 "
        width={220}
        height={250}
        backgroundColor="#dddada"
        foregroundColor="#90EE90	"
      >
        <rect x="3" y="3" rx="10" ry="10" width="300" height="200" />
        <rect x="6" y="220" rx="0" ry="0" width="200" height="20" />
        <rect x="4" y="260" rx="0" ry="0" width="170" height="30" />
        <rect x="4" y="320" rx="0" ry="0" width="220" height="20" />
      </ContentLoader>
    );
  });
const ProductSkeleton = () => {
  console.log(skeletonRender);
  return (
    <div className="flex  flex-wrap  gap-4 md:gap-12 mt-8">
      {skeletonRender}
    </div>
  );
};

export default ProductSkeleton;
