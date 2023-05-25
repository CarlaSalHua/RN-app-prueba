import {Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import styles from './SignUpStyles';
import SignUpSchema from 'src/schemas/SingUpSchema';
import SignUpForm from './components/SignUpForm';
import {IRootScreenProps, ISignUp} from 'src/types';
import authServices from 'src/services/authServices';

const SignUp = ({navigation}: SignUpProps) => {
  const handleSubmit = async (values: ISignUp) => {
    try {
      const user = await authServices.signUp(values);
      console.log('user', user);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>REGISTRARME</Text>
        </View>
        <View style={styles.formik}>
          <Formik
            component={SignUpForm}
            initialValues={{
              user: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          />
        </View>
        <Text style={styles.btn} onPress={() => navigation.navigate('Login')}>
          Cancelar
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

interface SignUpProps extends IRootScreenProps<'Signup'> {}
