import { 
  BrowserRouter as Router, 
  // Navigate, 
  Route, 
  Routes } from 'react-router-dom';
import ListProvider from '../Context/ListContext';
import UserProvider from '../Context/UserContext';
import Auth from './Auth/Auth';
import AuthForm from './Auth/AuthForm';
import ProtectedRoute from './Auth/ProtectedRoute';
import Lists from './Lists/Lists';


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
            <Route element={<ListProvider/>}>
              <Route path="lists" element={<Lists/>}/>
            </Route>
          </Route>

        </Routes>
      </UserProvider>
    </Router>
  );
}

