/*eslint no-restricted-globals: ["warn", "status"]*/
import React, { useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// Styled Components

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const StyledField = styled(Field)`
  color: white;
  font-size: 14px;
  background: transparent;
  padding: 4%;
  border-radius: 10px;
  margin-bottom: 2%;
`;

const FormButton = styled.button`
  position: relative;
  background-image: linear-gradient(
    90deg,
    rgba(109, 88, 198, 1) 0%,
    rgba(249, 119, 161, 1) 100%
  );
  border-radius: 12px;
  box-sizing: border-box;
  color: #111;
  display: block;
  height: 48px; /* make theme variable: inputHeight? */
  letter-spacing: 1px;
  margin: calc(${props => props.theme.spacing.md} * 2) auto;
  padding: 2px;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  z-index: 2;
  span {
    align-items: center;
    background: #e5e5e5;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: background 0.5s ease;
    width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ErrorMessage = styled.div`
  font-family: inherit;
  color: #e5195f;
  font-size: 12px;
`;

const RegisterMain = ({ values, status, errors, touched }) => {
  const history = useHistory();
  const location = useLocation();
  const { isAuthenticated, registered } = useAuth();
  useEffect(() => {
    console.log(status);
    const { from } = location.state || { from: { pathname: '/createProfile' } };
    if (registered) history.replace(from);
  }, [history, location, isAuthenticated]);

  return (
    <>
      <p>
        New Town? Constantly on the move? Friends are thousands of miles away?
        Well, good thing is that you're not alone.{' '}
        <strong>Register down below </strong>
        to say what's up to nearby Expats!
      </p>
      <StyledForm>
        <StyledField type="text" name="email" placeholder="Email" />
        {touched.email && errors.email ? (
          <ErrorMessage>{errors.email}</ErrorMessage>
        ) : (
          undefined
        )}
        <StyledField type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <ErrorMessage>{errors.username}</ErrorMessage>
        )}
        <StyledField type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <ErrorMessage>{errors.password}</ErrorMessage>
        )}
        <StyledField
          type="password"
          name="confirmed_password"
          placeholder="Confirm Password"
        />
        {touched.confirmed_password && errors.confirmed_password && (
          <ErrorMessage>{errors.confirmed_password}</ErrorMessage>
        )}
        {/* <label className="checkbox-container">
          <StyledField type="checkbox" name="terms" checked={values.terms} />
          <span>
            I agree to all <Link to="/terms">terms and conditions</Link>
          </span>
        </label> */}
        <FormButton type="submit" className="register-button">
          <span>Register</span>
        </FormButton>
      </StyledForm>
    </>
  );
};

const FormikRegisterMain = withFormik({
  mapPropsToValues({ email, username, password, confirmed_password }) {
    return {
      email: email || '',
      username: username || '',
      password: password || '',
      confirmed_password: confirmed_password || '',
      //   terms: terms || false, // Currently unable to check and uncheck box
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    username: Yup.string()
      .min(2, 'Too short - at least 3 characters!')
      .max(20, 'Too Long - no more than 20 characters!')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too short - at least 6 characters!')
      .max(20, 'Too Long - no more than 20 characters!')
      .required('Required'),
    confirmed_password: Yup.string()
      .min(6, 'Too short - at least 6 characters!')
      .max(20, 'Too Long - no more than 20 characters!')
      .required('Required'),
    // terms: Yup.boolean().oneOf([true], 'Must Accept Terms'),
  }),
  handleSubmit(values, { props, setStatus, resetForm }) {
    const { handleRegister } = props;
    setStatus(values);
    if (values) handleRegister(values);
    resetForm();
  },
})(RegisterMain);

export default FormikRegisterMain;
