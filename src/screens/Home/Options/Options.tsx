import {Image, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {DataOptions} from 'src/data/DataOptions';
import styles from './OptionsStyle';

const Options = () => {
  const screenWidth = Dimensions.get('window').width;
  const columnWidth = screenWidth * 0.25;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Opciones</Text>
      <View style={styles.row}>
        {DataOptions.map((option, i) => {
          return (
            <View key={i} style={[styles.column, {width: columnWidth}]}>
              <TouchableOpacity style={[styles.button_circle]}>
                <Image source={option.img} style={[styles.img_button]} />
              </TouchableOpacity>
              <Text style={styles.label}>{option.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Options;
