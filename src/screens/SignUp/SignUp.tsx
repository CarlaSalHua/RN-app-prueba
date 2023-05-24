import {Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import styles from './SignUpStyles';
import SignUpSchema from 'src/schemas/SingUpSchema';
import SignUpForm from './components/SignUpForm';
import {ISignUp} from 'src/types';
import authServices from 'src/services/authServices';

const SignUp = () => {
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
      <Text>REGISTRARME</Text>
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
  );
};

export default SignUp;
