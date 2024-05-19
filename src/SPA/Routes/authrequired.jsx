import { Navigate, Outlet, useLocation } from "react-router-dom";
//5/april/24
function AuthRequired() {
  const location = useLocation();
  const token = localStorage.getItem("Fullstacktoken");

  // Redirect to login page if token is not present
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Render Outlet to allow access to protected routes
  return <Outlet />;
}

export default AuthRequired;
