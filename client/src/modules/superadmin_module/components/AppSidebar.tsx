import {
  ChevronDown,
  Footprints,
  Home,
  User2,
  PlusIcon,
  ListCheck,
  ArchiveIcon,
  Logs,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../shared/ui/collapsible"; // Ensure this is installed/imported
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../../../shared/ui/sidebar";
import { Button } from "../../../shared/ui/button";
import { useAuthStore } from "../../auth_module/store/useAuth";

export function AppSidebar() {
  const logout = useAuthStore((s) => s.logout);
  return (
    <Sidebar className="text-primary" variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex items-center px-4 py-6 flex-row gap-2">
        <div className="bg-primary text-primary-foreground w-10 h-10 rounded flex items-center justify-center shrink-0">
          <Footprints size={24} />
        </div>
        <h1 className="font-bold text-xl tracking-tight truncate">
          KICKSLOGIX
        </h1>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {/* 1. Normal Dashboard Link */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <a href="dashboard">
                  <Home />
                  <span>Dashboard</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* 2. ACCORDION: User Manager */}
            <Collapsible asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="User Manager">
                    <User2 />
                    <span>User Manager</span>
                    <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="addbranchmanagers">
                          <PlusIcon className="size-4 mr-2" />
                          <span>Add Branch Manager</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="viewbranchmanagers">
                          <ListCheck className="size-4 mr-2" />
                          <span>View Branch Managers</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="superadmin/usermanager/archived">
                          <ArchiveIcon className="size-4 mr-2" />
                          <span>Archived</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="AuditLogs">
              <a href="/">
                <Logs />
                <span>AuditLog</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer remains the same with your Profile dropdown */}
    </Sidebar>
  );
}
