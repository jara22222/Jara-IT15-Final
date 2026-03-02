import { Suspense } from "react";
import { SidebarProvider, SidebarTrigger } from "../../../shared/ui/sidebar";
import { Outlet } from "react-router";
import { Loader } from "lucide-react";
import { AppSidebar } from "../components/AppSidebar";

export default function SuperAdminlAyout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </SidebarProvider>
  );
}
