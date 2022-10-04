import { 
  BrowserRouter as Router, 
  // Navigate, 
  Route, 
  Routes } from 'react-router-dom';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Email from './Contact/Email.jsx';
import Linkedin from './Contact/Linkedin.jsx';
import Resume from './Contact/Resume.jsx';
// import Header from './Page/Header/Header.jsx';
import Layout from './Page/Layout.jsx';
import Projects from './Projects/Projects.jsx';
import Search from './Search/Search.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route index path="/"/>
          <Route path="about" element={<About/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="search" element={<Search/>}/> 
          <Route path="contact" element={<Contact/>}>
            <Route index element={<Email/>}/>
            <Route path="linkedin" element={<Linkedin/>}/>
            <Route path="resume" element={<Resume/>}/>
          </Route>
        </Route>
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Router>
  );
}
//small change
