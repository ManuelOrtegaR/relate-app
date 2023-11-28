import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import globalStyles from '../App.styles';

export default function TouchButton({
  title = '',
  onPress = () => {},
  variant = 'primary',
  width = '100%',
}) {
  return (
    <TouchableOpacity
      style={[
        globalStyles.button,
        globalStyles[variant].background,
        globalStyles.space,
        { width },
      ]}
      onPress={onPress}
    >
      <Text style={[globalStyles[variant].text]}>{title}</Text>
    </TouchableOpacity>
  );
}
