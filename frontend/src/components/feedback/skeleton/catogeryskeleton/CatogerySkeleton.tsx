import ContentLoader from "react-content-loader";
const rederSkeleton = Array(5)
  .fill(0)
  .map((_, idx) => {
    return (
      <ContentLoader
        key={idx}
        speed={2}
        width={140}
        height={140}
        viewBox="0 0 140 140"
        backgroundColor="#dddada"
        foregroundColor="#90EE90	"
      >
        <circle cx="80" cy="80" r="60" />
        <rect x="43" y="170" rx="4" ry="4" width="70" height="12" />
      </ContentLoader>
    );
  });
const CatogerySkeleton = () => {
  return (
    <div className="flex  flex-wrap  gap-4 md:gap-12 mt-8">{rederSkeleton}</div>
  );
};

export default CatogerySkeleton;
