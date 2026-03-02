import { createBrowserRouter } from "react-router";
import Login from "./modules/auth_module/pages/Login";

import SuperAdminlAyout from "./modules/superadmin_module/layout/SuperAdminlAyout";

export const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <SuperAdminlAyout />,
    path: "/superadmin/dashboard",
  },
]);
