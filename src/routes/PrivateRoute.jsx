import { Navigate, useLocation } from "react-router";
import Spinner from "../components/spinner/Spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to={"/auth/signin"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
