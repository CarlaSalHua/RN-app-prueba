import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UserInfo} from 'firebase/auth';
import LoginSchema from 'src/schemas/LoginSchema';
import SignUpSchema from 'src/schemas/SingUpSchema';
import * as Yup from 'yup';

export type ILogin = Yup.InferType<typeof LoginSchema>;

export type ISignUp = Yup.InferType<typeof SignUpSchema>;

export type IRootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

export type IRootScreenProps<T extends keyof IRootStackParamList> =
  NativeStackScreenProps<IRootStackParamList, T>;

export type IUser = Omit<UserInfo, 'phoneNumber' | 'providerId'> & {
  isAuth: boolean;
};
