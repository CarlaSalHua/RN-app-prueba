import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import styles from './InputStyles';

const ButtonShowPassword = ({
  showPassword,
  iconSize,
  ...props
}: ButtonShowProps) => {
  return (
    <TouchableOpacity onPress={() => console.log('holla')} {...props}>
      {showPassword ? (
        <IconEntypo name="eye" size={iconSize} color="#505050" />
      ) : (
        <IconEntypo name="eye-with-line" size={iconSize} color="#505050" />
      )}
    </TouchableOpacity>
  );
};

export default ButtonShowPassword;

interface ButtonShowProps extends TouchableOpacityProps {
  showPassword?: boolean;
  iconSize?: number;
}
