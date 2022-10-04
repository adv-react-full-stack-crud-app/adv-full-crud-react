import { 
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl 
} from './Forms/FormControl';
import { useForm } from './Forms/useForm';
import styles from './Projects.css';


export default function Projects() {

  const [data, handleChange] = useForm();

  return (
    <div className={styles.Projects}>
      <form>
        <InputControl
          label="Email"
          name="email"
          placeholder="Email"
          required
          value={data.email || ''}
          onChange={handleChange}
        />
        <InputControl
          label="Password"
          name="password"
          placeholder="Password"
        />

        <SelectControl
          label="Select"
          placeholder="Make your choice"
          name="role"
          required
          value={data.role || ''}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">stuff</option>
        </SelectControl>

        <TextAreaControl
          label="Journal Entry"
          placeholder="how are you feeling today?"
          name="journal"
          required
          value={data.journal || ''}
          onChange={handleChange}
        />

        <CheckboxControl
          legend="Hungry?"
          label="Yes"
          name="yes"
          value={data.yes || false}
          onChange={handleChange}
        />

        <FormButton>Submit</FormButton>
      </form>
      
      {/* <CheckboxControl legend="Do you accept?" label="Yes" /> */}

    </div>

  );
}
