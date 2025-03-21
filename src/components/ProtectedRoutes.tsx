import { useAuthStore } from "@/stores/auth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.profileData);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
