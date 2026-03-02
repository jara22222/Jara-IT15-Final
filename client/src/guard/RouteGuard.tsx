import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../modules/auth_module/store/useAuth";

type allowedRouteType = {
  allowedRoles?: string[];
};

export default function RouteGuard(allowedRoute: allowedRouteType) {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((u) => u.user);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
