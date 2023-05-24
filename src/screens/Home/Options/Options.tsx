import {Image, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {DataOptions} from 'src/data/DataOptions';
import styles from './OptionsStyle';

const Options = () => {
  const [show, setShow] = useState<boolean>(false);
  const screenWidth = Dimensions.get('window').width;
  const columnWidth = screenWidth * 0.3;

  const showOptions = () => {
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showOptions}>
        <Text>Opciones</Text>
      </TouchableOpacity>
      {show && (
        <View style={styles.row}>
          {DataOptions.map((option, i) => {
            return (
              <View key={i} style={[styles.column, {width: columnWidth}]}>
                <TouchableOpacity style={[styles.button_circle]}>
                  <Image source={option.img} style={[styles.img_button]} />
                </TouchableOpacity>
                <Text>{option.label}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Options;
