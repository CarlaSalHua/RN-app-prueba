import LoginSchema from 'src/schemas/LoginSchema';
import SignUpSchema from 'src/schemas/SingUpSchema';
import * as Yup from 'yup';

export type ILogin = Yup.InferType<typeof LoginSchema>;

export type ISignUp = Yup.InferType<typeof SignUpSchema>;
