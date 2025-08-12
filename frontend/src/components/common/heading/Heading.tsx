import { memo } from "react";

type TheadingProps = {
  title: string;
};
const Heading = ({ title }: TheadingProps) => {
  return (
    <h1 className=" relative font-Inter max-w-fit before-dot">{`${title.toUpperCase()} Products`}</h1>
  );
};

export default memo(Heading);
