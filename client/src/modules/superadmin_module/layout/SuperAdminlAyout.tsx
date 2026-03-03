import { Suspense } from "react";
import { SidebarProvider, SidebarTrigger } from "../../../shared/ui/sidebar";
import { Outlet } from "react-router";
import { Loader } from "lucide-react";
import { AppSidebar } from "../components/AppSidebar";

export default function SuperAdminlAyout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1 min-w-0 overflow-hidden">
        <header>
          <SidebarTrigger />  
        </header>
        <section className="p-5">
          <Suspense fallback={<Loader />}>
            <div className="max-w-full">
              <Outlet />
            </div>
          </Suspense>
        </section>
      </main>
    </SidebarProvider>
  );
}
