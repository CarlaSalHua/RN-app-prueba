import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  user: Yup.string().required('Ingrese su nombre de usuario'),
  password: Yup.string().required('Ingrese su contraseña'),
});

export default LoginSchema;
