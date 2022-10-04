import { Link, Outlet } from 'react-router-dom';
import styles from './Contact.css';

export default function Contact() {
  return (
    <div className={styles.Contact}>
      <h1>Contact</h1>
      <nav>
        <Link to="">Email</Link>
        <Link to="linkedin">Linkedin</Link>
        <Link to="resume">Resume</Link>
      </nav>
      <Outlet />
    </div>
  );
}
