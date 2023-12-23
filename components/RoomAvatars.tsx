import React from 'react';
import { Image, View } from 'react-native';
import { useTheme } from 'react-native-paper';

interface Props {
  hairUrl: string;
  faceUrl: string;
  eyeUrl: string;
  noseUrl: string;
  mouthUrl: string;
  width?: number;
  height?: number;
}

export const RoomAvatars = (props: Props) => {
  const theme = useTheme();
  const { eyeUrl, faceUrl, hairUrl, mouthUrl, noseUrl, height, width } = props;
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: width || 60,
        height: height || 60,
        borderRadius: 50,
        justifyContent: 'center',
      }}
    >
      <Image
        source={{ uri: faceUrl }}
        style={{
          width: width || 48,
          height: height || 60,
          alignSelf: 'center',
        }}
      />
      <Image
        source={{ uri: hairUrl }}
        style={{
          width: width || 48,
          height: height || 60,
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
      <Image
        source={{ uri: eyeUrl }}
        style={{
          width: width || 48,
          height: height || 60,
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
      <Image
        source={{ uri: noseUrl }}
        style={{
          width: width || 48,
          height: height || 60,
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
      <Image
        source={{ uri: mouthUrl }}
        style={{
          width: width || 48,
          height: height || 60,
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
    </View>
  );
};
