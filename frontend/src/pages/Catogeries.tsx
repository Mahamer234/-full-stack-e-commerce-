import GridList from "../components/common/gridList/GridList";
import Category from "../components/ecommerce/catogery/category";
import Loading from "../components/feedback/loading/Loading";
import UseCategory from "@hooks/UseCategory";
import type { Tcatogery } from "@types/catogery";
const Catogery = () => {
  const { records, loading } = UseCategory();
  return (
    <div>
      <Loading status={loading} type={"category"}>
        <GridList<Tcatogery>
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </div>
  );
};

export default Catogery;
