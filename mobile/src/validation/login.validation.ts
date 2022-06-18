import * as Yup from 'yup';

const loginValidation = Yup.object().shape({
  username: Yup.string()
      .min(4, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
  password: Yup.string()
      .min(4, 'Too Short!')
      .required('Required'),
});

export default loginValidation;
