import { FormButton, InputControl } from '../Projects/Forms/FormControl';
import styles from './AuthForm.css';

export default function AuthForm() {
  return (
    <form className={styles.AuthForm}>
      <h1>Sign Up</h1>
      <InputControl 
        label="Email"
        name="name"
        type="email"
      />
      <InputControl
        label="Password"
        name="password"
        type="password"
      />
      <FormButton>Submit</FormButton>
    </form>
  );
}
