import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  user: Yup.string().email('Su email es inválido').required('Ingrese su email'),
  password: Yup.string().required('Ingrese su contraseña'),
});

export default LoginSchema;
