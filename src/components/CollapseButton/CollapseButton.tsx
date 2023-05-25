import {Text, View, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {DataCollapseButton} from 'src/data/DataCollapseButton';
import React, {useState} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './CollapseButtonStyles';

const CollapseButton = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <>
      {DataCollapseButton.map((info, index) => {
        const isExpanded = expandedIndex === index;
        const contentHeight = isExpanded ? 270 : 0;
        const contentOpacity = isExpanded ? 1 : 0;

        return (
          <View
            key={index}
            style={[styles.container, {backgroundColor: info.color}]}>
            <TouchableOpacity
              onPress={() => toggleExpanded(index)}
              style={styles.btn_title}>
              <Text style={styles.title}>{info.title}</Text>
              <FontAwesome5Icon
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={20}
                color={'#000000'}
              />
            </TouchableOpacity>
            <Animated.View
              style={[
                styles.animated,
                {
                  height: contentHeight,
                  opacity: contentOpacity,
                },
              ]}>
              {/* Contenido del botón expandible */}
              {isExpanded && (
                <View style={styles.expanded}>
                  <Text style={styles.text}>{info.text}</Text>
                </View>
              )}
            </Animated.View>
          </View>
        );
      })}
    </>
  );
};

export default CollapseButton;
