import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCatogeries } from "@store/catogeries/categorySlice";

const UseCategories = () => {
  const dispatch = useAppDispatch();
  const { records, loading } = useAppSelector((state) => state.categories);
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCatogeries());
    }
  }, [records, dispatch]);
  return { records, loading };
};

export default UseCategories;
