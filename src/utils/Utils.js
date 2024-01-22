import { Navigate } from "react-router-dom";
import { ADMIN_PAGE_ROLES } from "../Constants";

export function AdminRolesAuthRoute({ children, userRole }) {
  const canAccess = ADMIN_PAGE_ROLES.includes(userRole);

  if (canAccess) {
    return <>{children}</>;
  }

  return (<Navigate to="/login" />); 
}
