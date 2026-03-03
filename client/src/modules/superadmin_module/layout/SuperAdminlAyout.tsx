import { Suspense } from "react";

import { Outlet } from "react-router";
import { Loader } from "lucide-react";
import { AppSidebar } from "../components/AppSidebar";
import { SidebarProvider } from "../../../shared/ui/sidebar";

export default function SuperAdminlAyout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1 min-w-0 overflow-hidden">
        <section>
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
