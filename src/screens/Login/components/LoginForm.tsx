import {Text} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';
import {FormikProps} from 'formik';
import {ILogin} from 'src/types';
import Input from 'src/components/Input/Input';
import Button from 'src/components/Button/Button';

const LoginForm = ({
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  values,
  errors,
}: LoginFormProps) => {
  return (
    <>
      <Input
        placeholder="Usuario"
        Icon={<IconFontAwesome5 name="user" size={30} color="#505050" />}
        onChangeText={handleChange('user')}
        onBlur={handleBlur('user')}
        value={values.user}
      />
      {errors.user && touched.user && <Text>{errors.user}</Text>}
      <Input
        placeholder="Contraseña"
        type="password"
        Icon={<IconFontisto name="locked" size={30} color="#505050" />}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      {errors.password && touched.password && <Text>{errors.password}</Text>}

      <Button label="INGRESAR" color="#5CB85C" onPress={handleSubmit} />
    </>
  );
};

export default LoginForm;

interface LoginFormProps extends FormikProps<ILogin> {}
