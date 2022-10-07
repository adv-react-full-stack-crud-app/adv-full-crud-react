/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { signInUser, signUpUser } from '../../Services/auth';
import { FormButton, InputControl } from '../Projects/Forms/FormControl';
import { useForm } from '../Projects/Forms/useForm';
import styles from './AuthForm.css';

export default function AuthForm({ mode = 'signin' }) {

  const [data, handleChange] = useForm();
  

  const signUp = async (credentials) => {
    await signUpUser(credentials);
  };

  const signIn = async (credentials) => {
    await signInUser(credentials);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await type.action(data);
    window.location.replace('/lists');
  };

  const signin = {
    prompt: 'Sign in to your account',
    button: 'Sign in',
    switch: {
      prompt: 'Need to create an account?',
      link: 'signup',
    },
    action: signIn,
  };

  const signup = {
    prompt: 'Create an account',
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account?',
      link: '../',
    },
    action: signUp,
  };

  const modes = { signin, signup };
  const type = modes[mode];

  return (
    <form className={styles.AuthForm} onSubmit={(e) => handleSubmit(e) }>
      <h1>{type.prompt}</h1>
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
      <FormButton>{type.button}</FormButton>
      <nav>
        <Link to={type.switch.link}>{type.switch.prompt}</Link>
      </nav>
    </form>
  );
}
