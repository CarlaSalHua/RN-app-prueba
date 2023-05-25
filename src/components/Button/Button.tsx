import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ButtonStyles';
import {TouchableOpacityProps} from 'react-native';

const Button = ({label, color, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      {...props}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  color?: string;
}
