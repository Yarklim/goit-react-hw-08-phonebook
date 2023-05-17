import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  InputStyled,
} from 'components/ContactForm/ContactForm.styled';

const AuthForm = ({ onSubmit, submitTitle }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <InputStyled
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter name..."
        required
      />
      <h3>Email</h3>
      <InputStyled
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email..."
        required
      />
      <h3>Password</h3>
      <InputStyled
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter password..."
        required
      />
      <Button type="submit">{submitTitle}</Button>
    </Form>
  );
};

export default AuthForm;

AuthForm.propTypes = {
	onSubmit: PropTypes.func,
	submitTitle: PropTypes.string
}