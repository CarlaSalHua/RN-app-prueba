import {Text, View} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';
import {FormikProps} from 'formik';
import {ISignUp} from 'src/types';
import Input from 'src/components/Input/Input';
import Button from 'src/components/Button/Button';
import styles from '../SignUpStyles';

const SignUpForm = ({
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  values,
  errors,
}: SignUpFormProps) => {
  console.log(errors);
  return (
    <>
      <Input
        placeholder="usuario@gmail.com"
        Icon={<IconFontAwesome5 name="user" size={30} color="#505050" />}
        onChangeText={handleChange('user')}
        onBlur={handleBlur('user')}
        value={values.user}
      />
      {errors.user && touched.user && <Text>{errors.user}</Text>}
      <Input
        placeholder="contraseña"
        type="password"
        Icon={<IconFontisto name="locked" size={30} color="#505050" />}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      {errors.password && touched.password && <Text>{errors.password}</Text>}
      <Input
        placeholder="confirmar contraseña"
        type="password"
        Icon={<IconFontisto name="locked" size={30} color="#505050" />}
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        value={values.confirmPassword}
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <Text>{errors.confirmPassword}</Text>
      )}
      <View style={styles.btn_green}>
        <Button label="REGISTRAR" color="#5CB85C" onPress={handleSubmit} />
      </View>
    </>
  );
};

export default SignUpForm;

interface SignUpFormProps extends FormikProps<ISignUp> {}
