import {Text, View} from 'react-native';
import React from 'react';
import styles from './LoginStyle';
import {Formik} from 'formik';
import LoginSchema from 'src/schemas/LoginSchema';
import LoginForm from './components/LoginForm';
import {ILogin} from 'src/types';
import authServices from 'src/services/authServices';

const Login = () => {
  const handleSubmit = async (values: ILogin) => {
    try {
      const user = await authServices.login(values);
      console.log('user', user);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>INICIAR SESIÓN</Text>
      <Formik
        component={LoginForm}
        initialValues={{
          user: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      />
    </View>
  );
};

export default Login;
