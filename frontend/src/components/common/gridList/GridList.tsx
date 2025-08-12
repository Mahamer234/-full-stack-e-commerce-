import type React from "react";
import LottiHandelr from "../../feedback/lottiHandler/LottiHandelr";

type GridListProps<T> = {
  records: T[];
  renderItem: (Record: T) => React.ReactNode;
};
const GridList = <T extends { id?: number }>({
  records,
  renderItem,
}: GridListProps<T>) => {
  const renderList = records.length ? (
    records.map((record) => {
      return <div key={record.id ?? Math.random()}> {renderItem(record)}</div>;
    })
  ) : (
    /* "there are no records" */
    <LottiHandelr type="errorLotti" />
  );
  return (
    <div className="  flex  flex-col sm:flex-row  justify-center items-center sm:justify-start sm:items-center sm:flex-wrap  gap-4 sm:gap-12 mt-4 ">
      {renderList}
    </div>
  );
};

export default GridList;
