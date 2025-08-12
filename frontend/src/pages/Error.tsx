import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import LottiHandelr from "../components/feedback/lottiHandler/LottiHandelr";
const Error = () => {
  /*  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  } */

  return (
    <div className="bg-green-600 text-yellow-50 flex flex-col justify-center items-center  min-h-screen ">
      {/* <h1> {errorStatus} </h1>
      <p> {errorStatusText} </p> */}
      <LottiHandelr type={"errorLotti"} className=" w-1/2 h-1/2" />
      <Link to={"/"} replace={true}>
        <p className="capitalize text-2xl font-serif"> go home</p>
      </Link>
    </div>
  );
};

export default Error;
