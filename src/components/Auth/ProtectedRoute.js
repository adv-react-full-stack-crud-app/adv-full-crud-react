import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';

export default function ProtectedRoute() {
  const [user] = useUser();
  if (!user) return <Navigate to="/" />;
  return <Outlet />;
}
