import React from 'react';
import { Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import globalStyles from '../App.styles.ts';
import { Image } from 'react-native';
import { FlatList } from 'react-native';

export const Rooms = () => {
  const data = [
    { id: '1', name: 'room1', status: 'online', language: 'spanish' },
    { id: '2', name: 'room2', status: 'offline', language: 'spanish' },
    { id: '3', name: 'room3', status: 'online', language: 'spanish' },
    { id: '4', name: 'room4', status: 'offline', language: 'spanish' },
    { id: '5', name: 'room5', status: 'online', language: 'spanish' },
  ];
  return (
    <View style={globalStyles.container}>
      <Image
        source={{ uri: 'https://placehold.co/48/png' }}
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          marginLeft: 4,
          resizeMode: 'contain',
        }}
      />
      <Text>Character name</Text>
      <Text>Rating</Text>
      <Text>Coins</Text>
      <Text>Gems</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            <Text>{item.name}</Text>
            <Text>{item.status}</Text>
            <Text>{item.language}</Text>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
