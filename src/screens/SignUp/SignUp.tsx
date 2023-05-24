import {Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import styles from './SignUpStyles';
import SignUpSchema from 'src/schemas/SingUpSchema';
import SignUpForm from './components/SignUpForm';
import {ISignUp} from 'src/types';

const SignUp = () => {
  const handleSubmit = (values: ISignUp) => {
    console.log('val', values);
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
