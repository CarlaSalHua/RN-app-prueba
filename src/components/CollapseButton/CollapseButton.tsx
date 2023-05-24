import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import React, {useState} from 'react';

const CollapseButton = () => {
  const [expanded, setExpanded] = useState(false);
  const contentHeight = useSharedValue(0);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    contentHeight.value = withTiming(expanded ? 0 : 200);
  };

  const contentStyle = useAnimatedStyle(() => {
    return {
      height: contentHeight.value,
      opacity: contentHeight.value > 0 ? 1 : 0,
    };
  });

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={toggleExpanded}>
        <Text>Expandir/Colapsar</Text>
      </TouchableOpacity>
      <Animated.View style={[{overflow: 'hidden'}, contentStyle]}>
        {/* Contenido del botón expandible */}
        <View>
          <Text>Contenido expandible</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default CollapseButton;

const styles = StyleSheet.create({});
