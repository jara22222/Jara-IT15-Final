import { createBrowserRouter } from "react-router";
import Login from "./modules/auth_module/pages/Login";

import SuperAdminlAyout from "./modules/superadmin_module/layout/SuperAdminlAyout";
import RouteGuard from "./guard/RouteGuard";
import SuperAdminDashboard from "./modules/superadmin_module/pages/SuperAdminDashboard";
import SuperAdminUserManager from "./modules/superadmin_module/pages/SuperAdminUserManager";

export const router = createBrowserRouter([
  //Auth Module
  {
    element: <Login />,
    path: "/login",
  },

  //Super Admin Module
  {
    element: <RouteGuard allowedRoles={["SuperAdmin"]} />,
    children: [
      {
        element: <SuperAdminlAyout />,
        path: "superadmin",
        children: [
          {
            index: true,
            path: "dashboard",
            element: <SuperAdminDashboard />,
          },
          {
            path: "addbranchmanagers",
            element: <SuperAdminUserManager />,
          },
        ],
      },
    ],
  },
]);
