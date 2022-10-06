import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';

export default function ProtectedRoute() {
  const user = useUser();
  console.log('user', user);
  if (user.includes(null)) return <Navigate to="/" />;
  return <Outlet />;
}
