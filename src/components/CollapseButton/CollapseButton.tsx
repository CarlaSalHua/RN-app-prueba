import {Text, View, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {DataCollapseButton} from 'src/data/DataCollapseButton';
import React, {useState} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const CollapseButton = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpanded = index => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <View style={{flex: 1}}>
      {DataCollapseButton.map((info, index) => {
        const isExpanded = expandedIndex === index;
        const contentHeight = isExpanded ? 250 : 0;
        const contentOpacity = isExpanded ? 1 : 0;

        return (
          <View key={index}>
            <TouchableOpacity onPress={() => toggleExpanded(index)}>
              <Text>{info.title}</Text>
              <FontAwesome5Icon
                name={isExpanded ? 'chevron-down' : 'chevron-up'}
              />
            </TouchableOpacity>
            <Animated.View
              style={{
                overflow: 'hidden',
                height: contentHeight,
                opacity: contentOpacity,
              }}>
              {/* Contenido del botón expandible */}
              {isExpanded && (
                <View>
                  <Text>{info.text}</Text>
                </View>
              )}
            </Animated.View>
          </View>
        );
      })}
    </View>
  );
};

export default CollapseButton;
