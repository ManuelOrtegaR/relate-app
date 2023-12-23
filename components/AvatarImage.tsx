import React from 'react';
import { Image } from 'react-native';
import { AvatarUrls } from '../api/avatar/types';

interface Props {
  sprites: AvatarUrls;
  width?: number;
  height?: number;
}

export const AvatarImage = (props: Props) => {
  const { sprites, height, width } = props;
  return (
    <>
      <Image
        source={{ uri: sprites?.faceUrl.spriteUrl }}
        style={{
          width: width || 48,
          height: height || 50,
          alignSelf: 'center',
        }}
      />
      <Image
        source={{ uri: sprites?.hairUrl.spriteUrl }}
        style={{
          width: width || 48,
          height: height || 50,
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
      <Image
        source={{ uri: sprites?.eyeUrl.spriteUrl }}
        style={{
          width: width || 48,
          height: height || 50,
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
      <Image
        source={{ uri: sprites?.noseUrl.spriteUrl }}
        style={{
          width: width || 48,
          height: height || 50,
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
      <Image
        source={{ uri: sprites?.mouthUrl.spriteUrl }}
        style={{
          width: width || 48,
          height: height || 50,
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
    </>
  );
};
