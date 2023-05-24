import {Text, View} from 'react-native';
import React from 'react';
import styles from './LoginStyle';
import {Formik} from 'formik';
import LoginSchema from 'src/schemas/LoginSchema';
import LoginForm from './components/LoginForm';
import {ILogin} from 'src/types';

const Login = () => {
  const handleSubmit = (values: ILogin) => {
    console.log('val', values);
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
