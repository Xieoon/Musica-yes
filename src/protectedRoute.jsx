import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/" }) => {
  if (!(document.cookie === 'token')) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return children;
};