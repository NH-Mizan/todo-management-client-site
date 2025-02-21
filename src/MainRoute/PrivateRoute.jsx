
import { Navigate } from "react-router-dom";
import useAuth from "../CastomHooks/useAuth";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const{user, loading} = useAuth()

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;