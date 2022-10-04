import { render, screen } from '@testing-library/react';
import { 
  TextAreaControl, 
  InputControl, 
  SelectControl, 
  CheckboxControl,
  FormButton,
  LabelText
} from './FormControl.jsx';

test('Input Control', () => {
  render(
    <InputControl 
      label="Password"
      name="password"
      required
      placeholder="Password"
    />
  );

  const inputControl = screen.getByLabelText('Password');
  expect(inputControl.placeholder).toBe('Password');
  expect(inputControl.name).toBe('password');
  expect(inputControl.required).toBe(true);
});

test('TextAreaControl', () => {
  render(
    <TextAreaControl
      label="Journal Entry"
      placeholder="how are you feeling today?"
      name="journal"
      required

    />
  );

  const textControl = screen.getByPlaceholderText('how are you feeling today?');
  expect(textControl.placeholder).toBe('how are you feeling today?');
  expect(textControl.name).toBe('journal');
  expect(textControl.required).toBe(true);

});

test('SelectControl', () => {
  render(
    <SelectControl
      label="Select" name="options" required>
      <option disabled selected value="">Make your choice</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>stuff</option>
    </SelectControl>
  );

  const selectControl = screen.getByLabelText('Select');
  expect(selectControl.name).toBe('options');
  expect(selectControl.options.length).toBe(5);
  expect(selectControl.required).toBe(true);

});

test('CheckboxControl', () => {
  render(
    <CheckboxControl
      legend="Hungry?"
      label="Yes"
      name="yes"
      required
    />
  );

  const legend = screen.getByText('Hungry?');
  expect(legend).not.toBeNull();
  const checkboxControl = screen.getByLabelText('Yes');
  expect(checkboxControl.required).toBe(true);
});

test('FormButton', () => {
  render(
    <FormButton>Submit</FormButton>
  );
  
  const button1 = screen.getByRole('button');
  expect(button1.textContent).toBe('Submit');
  const button = screen.getByText('Submit');
  expect(button.textContent).toBe('Submit');
});

test('Required Label Text', async () => {
  render(<LabelText text="label" required />);
  const label = screen.getByText('label');
  expect(label).toBeTruthy();
  expect(label.classList.contains('Required')).toBe(true);
});

function testRequired(controlType, Component) {
  test(`Required ${controlType} Control`, async () => {
    render(<Component legend="label" label="label" required />);

    const label = screen.getByText('label');
    expect(label).toBeTruthy();
    expect(label.classList.contains('Required')).toBe(true);
  });
}

testRequired('Input', InputControl);
testRequired('Select', InputControl);
testRequired('TextArea', InputControl);

test('Required Checkbox Control', async () => {
  render(<CheckboxControl legend="label" required />);

  const label = screen.getByText('label');
  expect(label).toBeTruthy();
  expect(label.classList.contains('Required')).toBe(true);
});
