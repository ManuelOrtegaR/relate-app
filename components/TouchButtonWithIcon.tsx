import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import globalStyles from '../App.styles';

export default function TouchButtonWithIcon({
  title = '',
  icon = null,
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
        { width, flexDirection: 'row', alignItems: 'center' },
      ]}
      onPress={onPress}
    >
      <Image
        source={icon ?? { uri: 'https://placehold.co/48/png' }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 24,
          marginLeft: 4,
          marginRight: 20,
          resizeMode: 'contain',
        }}
      />
      <Text
        style={[
          globalStyles[variant].text,
          { fontSize: 20, fontWeight: 'bold' },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
