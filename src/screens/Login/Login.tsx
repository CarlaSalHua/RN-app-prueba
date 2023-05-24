import {Text, View} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';
import styles from './LoginStyle';
import Input from 'src/components/Input/Input';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>INICIAR SESIÓN</Text>
      <Input
        placeholder="Usuario"
        Icon={<IconFontAwesome5 name="user" size={30} color="#505050" />}
      />
      <Input
        placeholder="Contraseña"
        type="password"
        Icon={<IconFontisto name="locked" size={30} color="#505050" />}
      />
      <Input
        placeholder="Confirmar Contraseña"
        type="password"
        Icon={<IconFontisto name="locked" size={30} color="#505050" />}
      />
    </View>
  );
};

export default Login;
