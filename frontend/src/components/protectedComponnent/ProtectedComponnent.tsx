import { toast } from "react-toastify";
import { useAppSelector } from "../../store/hooks";
import { Navigate } from "react-router-dom";

const ProtectedComponnent = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAppSelector((state) => state.auth);
  if (!accessToken) {
    toast.warn("must be login first");
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
};

export default ProtectedComponnent;
