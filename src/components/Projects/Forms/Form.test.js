import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import {
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from './FormControl.jsx';
import { useForm } from './useForm.js';

// eslint-disable-next-line react/prop-types
function Test({ onSubmit, formData }) {
  const [data, handleChange] = useForm(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        label="Email"
        name="email"
        placeholder="Email"
        required
        value={data.email || ''}
        onChange={handleChange}
      />

      <CheckboxControl
        legend="Hungry?"
        label="Yes"
        name="yes"
        value={data.yes || false}
        onChange={handleChange}
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
      <FormButton>Submit</FormButton>
    </form>
  );
}

test('Control changes update data', async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();

  render(<Test onSubmit={handleSubmit} />);

  //input
  const input = screen.getByLabelText('Email');
  await user.type(input, 'username');

  // select
  const selectControl = screen.getByLabelText('Select');
  await user.selectOptions(selectControl, '2');

  // input text
  const textArea = screen.getByLabelText('Journal Entry');
  await user.type(textArea, 'user pitch');

  // checkbox
  const checkbox = screen.getByLabelText('Yes');
  await user.click(checkbox);

  // click button
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'username',
    role: '2',
    journal: 'user pitch',
    yes: true,
  });
});

test('Form updates data when initialData changes', async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();

  const { rerender } = render(
    <Test
      onSubmit={handleSubmit}
      formData={{
        email: 'username',
        role: '2',
        journal: 'user pitch',
        yes: true,
      }}
    />
  );

  // input text
  const input = screen.getByLabelText('Email');
  await user.clear(input);
  await user.type(input, 'abc');

  const changedData = {
    email: 'updated username',
    role: '4',
    journal: 'updated pitch',
    yes: false,
  };

  rerender(<Test onSubmit={handleSubmit} formData={changedData} />);

  // click button
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith(changedData);
});
