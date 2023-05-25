import {ScrollView, View} from 'react-native';
import React from 'react';
import {CollapseButton} from 'src/components/CollapseButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Options} from './Options';
import {useAppDispatch} from 'src/redux/hooks';
import Button from 'src/components/Button/Button';
import authServices from 'src/services/authServices';
import {resetUser} from 'src/redux/slices/authSlice';
import styles from './HomeStyles';

const Home = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    await authServices.logOut();
    dispatch(resetUser());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.upperContainer}>
          <Options />
          <CollapseButton />
        </View>
        <View style={styles.lowerContainer}>
          <Button label="LOGOUT" color="#5CB85C" onPress={handleLogOut} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
