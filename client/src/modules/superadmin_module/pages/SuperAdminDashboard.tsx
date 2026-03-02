import { Button } from "../../../shared/ui/button";
import { useAuthStore } from "../../auth_module/store/useAuth";

function SuperAdminDashboard() {
  const logout = useAuthStore((s) => s.logout);
  const toke = useAuthStore((s) => s.token);
  return (
    <div>
      {toke}
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}

export default SuperAdminDashboard;
