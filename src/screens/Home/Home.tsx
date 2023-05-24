import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Options} from './Options';
import {CollapseButton} from 'src/components/CollapseButton';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Options />
      <CollapseButton />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
