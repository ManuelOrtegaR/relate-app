import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import globalStyles from '../App.styles.ts';
import { CharactersInRoom } from '../api/rooms/types';

interface Props {
  characters: CharactersInRoom[];
}

export const CharactersInRoomList = (props: Props) => {
  const { characters } = props;
  return (
    <View
      style={{
        flex: 0,
        flexDirection: 'row',
        gap: 10,
        width: '90%',
        justifyContent: 'center',
        marginBottom: 30,
      }}
    >
      {characters.map((character) => (
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://placehold.co/48/png' }}
            style={{
              width: 59,
              height: 59,
              borderRadius: 50,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: globalStyles.colors.white,
            }}
          >
            {character.name}
          </Text>
        </View>
      ))}
    </View>
  );
};
