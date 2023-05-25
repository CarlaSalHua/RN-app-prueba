import {Text, View} from 'react-native';
import React from 'react';
import styles from './LoginStyle';
import {Formik} from 'formik';
import LoginSchema from 'src/schemas/LoginSchema';
import LoginForm from './components/LoginForm';
import {ILogin, IRootScreenProps} from 'src/types';
import authServices from 'src/services/authServices';

const Login = ({navigation}: LoginProps) => {
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
      <View style={styles.sub_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>INICIAR SESIÓN</Text>
        </View>
        <View style={styles.formik}>
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
        <Text style={styles.btn} onPress={() => navigation.navigate('Signup')}>
          Registrarme
        </Text>
      </View>
    </View>
  );
};

export default Login;

interface LoginProps extends IRootScreenProps<'Login'> {}
