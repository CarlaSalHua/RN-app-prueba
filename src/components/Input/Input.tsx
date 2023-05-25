import {TextInput, TextInputProps, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import ButtonShowPassword from './ButtonShowPassword';
import styles from './InputStyles';

const Input = ({Icon, type, ...props}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        style={styles.input}
        secureTextEntry={type === 'password' && !showPassword}
        {...props}
      />
      {type === 'password' && (
        <ButtonShowPassword
          style={styles.btn_icon}
          iconSize={20}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
          showPassword={showPassword}
        />
      )}
    </View>
  );
};
export default Input;

interface InputProps extends TextInputProps {
  Icon: ReactNode;
  type?: 'password';
  //showPassword?: boolean;
  //onShowPassword?: (showPassword: boolean) => void; //no hay retorno
}
