import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/common/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = () => {
  return (
    <div className="container  flex flex-col relative   ">
      <Header />
      <div className="min-h-96">
        <Outlet />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default MainLayout;
