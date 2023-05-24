import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  user: Yup.string()
    .min(2, 'Nombre de usuario demasiado corto!')
    .max(50, 'Nombre de usuario demasiado largo!')
    .required('Este campo es requerido'),
  password: Yup.string()
    .max(50, 'Demasiado largo, disminuye los caracteres')
    .matches(/[a-z]+/, 'Debe tener mínimo una letra en minuscula')
    .matches(/[A-Z]+/, 'Debe tener mínimo una letra en mayuscula')
    .matches(/\d+/, 'Debe tener mínimo 1 número')
    .min(8, 'Debe tener 8 caracteres como mínimo')
    .required('Este campo es requerido'),
  confirmPassword: Yup.string()
    .required('Confirme su contraseña')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
});

export default SignUpSchema;
