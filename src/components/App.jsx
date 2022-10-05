import { 
  BrowserRouter as Router, 
  // Navigate, 
  Route, 
  Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import AuthForm from './Auth/AuthForm';
// import Layout from './Page/Layout';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>}>
          <Route index element={<AuthForm mode="signin"/>}/>
          <Route path="signup" element={<AuthForm mode="signup"/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
//small change

{/* <Route element={<Layout/>} >
          <Route index path="/"/>
          <Route path="auth" element={<Auth/>}/>
          <Route path="authform" element={<AuthForm mode="signin"/>}>
            <Route
              path="signup"
              element={<AuthForm mode="signup"/>}
            />
          </Route>
        </Route> */}
