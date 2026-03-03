import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../modules/auth_module/store/useAuth";

type allowedRoles = {
  allowedRoles?: string[];
};

export default function RouteGuard({ allowedRoles }: allowedRoles) {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((u) => u.user);

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  const hasAccess =
    !allowedRoles ||
    (Array.isArray(user.role)
      ? user.role.some((role) => allowedRoles.includes(role))
      : allowedRoles.includes(user.role as string));

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
