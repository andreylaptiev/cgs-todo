import * as Yup from 'yup';

const registerValidation = Yup.object().shape({
  username: Yup.string()
      .min(4, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
  email: Yup.string()
      .email('Wrong Email format')
      .required('Required'),
  password: Yup.string()
      .min(4, 'Too Short!')
      .required('Required'),
  verifyPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default registerValidation;
