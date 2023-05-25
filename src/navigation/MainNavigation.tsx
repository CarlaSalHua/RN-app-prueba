import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import useAuth from 'src/customHooks/useAuth';
import {useAppSelector} from 'src/redux/hooks';
import {Home} from 'src/screens/Home';
import {Login} from 'src/screens/Login';
import {SignUp} from 'src/screens/SignUp';
import {IRootStackParamList} from 'src/types';

const Stack = createNativeStackNavigator<IRootStackParamList>();

const MainNavigation = () => {
  useAuth();
  const {isAuth} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Login">
        {!isAuth ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={SignUp}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
