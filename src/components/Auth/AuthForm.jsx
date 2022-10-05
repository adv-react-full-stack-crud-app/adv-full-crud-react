import { signUpUser } from '../../Services/auth';
import { FormButton, InputControl } from '../Projects/Forms/FormControl';
import { useForm } from '../Projects/Forms/useForm';
import styles from './AuthForm.css';

export default function AuthForm() {

  const [data, handleChange] = useForm();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUser(data);
  };
  return (
    <form className={styles.AuthForm} onSubmit={(e) => handleSubmit(e) }>
      <h1>Sign Up</h1>
      <InputControl 
        label="First Name"
        name="firstName"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <InputControl 
        label="Last Name"
        name="lastName"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <InputControl 
        label="Email"
        name="email"
        type="email"
        onChange={(e) => handleChange(e)}
      />
      <InputControl
        label="Password"
        name="password"
        type="password"
        onChange={(e) => handleChange(e)}
      />
      <FormButton>Submit</FormButton>
    </form>
  );
}
