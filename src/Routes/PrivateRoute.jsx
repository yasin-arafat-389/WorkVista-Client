/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  let location = useLocation();

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <div>Loading</div>
      </div>
    );

  if (!user) {
    toast.error("You must login first");
    return <Navigate state={location.pathname} to="/login" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
