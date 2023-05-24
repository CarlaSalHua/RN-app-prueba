import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DataOptions} from 'src/data/DataOptions';

const Options = () => {
  return (
    <View>
      <Text>Options</Text>
      {DataOptions.map((option, i) => {
        return (
          <View key={i}>
            <Image source={option.img} />
          </View>
        );
      })}
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({});
