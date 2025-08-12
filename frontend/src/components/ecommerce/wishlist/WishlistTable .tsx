import type { Tproduct } from "@types/product";
import WishListItem from "./WishListItem";
const WishlistTable = ({ products }: { products: Tproduct[] }) => {
  if (!products.length)
    return (
      <p className="flex items-center justify-center text-3xl text-gray-600  h-40    ">
        wish list empty .....
      </p>
    );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[600px] w-full table-fixed">
        <thead className="border-b border-green-700 py-2">
          <tr>
            <th className="py-6 text-start pl-6">Product Name</th>
            <th className="py-6 text-start">Unit Price</th>
            <th className="py-6 text-start">Stock State</th>
            <th className="py-6 text-start"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <WishListItem {...product} key={product.id ?? product.cat_prefix} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default WishlistTable;
