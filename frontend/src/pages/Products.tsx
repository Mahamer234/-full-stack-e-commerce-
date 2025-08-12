import GridList from "../components/common/gridList/GridList";
import type { Tproduct } from "@types/product";
import Product from "../components/ecommerce/product/Product";
import Heading from "@components/common/heading/Heading";
import Loading from "../components/feedback/loading/Loading";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const { loading, productFullInfo, prefix } = useProducts();
  return (
    <>
      <Heading title={prefix} />
      <Loading status={loading} type={"product"}>
        <GridList<Tproduct>
          records={productFullInfo || []}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
