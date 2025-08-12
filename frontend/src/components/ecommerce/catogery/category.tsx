import { Link } from "react-router-dom";

type Tcatogery = {
  id?: number;
  title: string;
  prefix?: string;
  img: string;
};
const Category = ({ title, prefix, img }: Tcatogery) => {
  return (
    <>
      <Link to={prefix ?? "/"}>
        <div className="flex flex-col gap-4  items-center mt-8">
          <div className="p-1 bg-green-400 h-32 w-32 md:w-44 md:h-44 rounded-full">
            <img
              src={img}
              alt={title}
              draggable={false}
              className="w-full rounded-full"
            />
          </div>

          <p className="text-xl text-green-900 font-mono capitalize font-medium">
            {title}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Category;
