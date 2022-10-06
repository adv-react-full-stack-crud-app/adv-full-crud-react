import { 
  BrowserRouter as Router, 
  // Navigate, 
  Route, 
  Routes } from 'react-router-dom';
import UserProvider from '../Context/UserContext';
import Auth from './Auth/Auth';
import AuthForm from './Auth/AuthForm';
import ProtectedRoute from './Auth/ProtectedRoute';
import Lists from './Lists/Lists';
// import Layout from './Page/Layout';


export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Auth/>}>
            <Route index element={<AuthForm mode="signin"/>}/>
            <Route path="signup" element={<AuthForm mode="signup"/>}/>
          </Route>

          <Route element={<ProtectedRoute/>}>
            <Route path="lists" element={<Lists/>}/>
          </Route>


        </Routes>
      </UserProvider>
    </Router>
  );
}

