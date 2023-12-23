import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { RoomItem } from '../api/rooms/types';
import { Text, useTheme } from 'react-native-paper';
import globalStyles from '../App.styles.ts';
import { StarRating } from './StarRating';

interface Props {
  rooms: RoomItem[];
  navigation: (item: RoomItem) => void;
}

export const RoomsList = (props: Props) => {
  const theme = useTheme();
  const { rooms, navigation } = props;
  return (
    <FlatList
      scrollEnabled
      style={{ width: '90%' }}
      data={rooms}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            flex: 0,
            flexDirection: 'row',
            backgroundColor: theme.colors.primary,
            borderRadius: 35,
            padding: 6,
            marginBottom: 10,
          }}
          onPress={() => {
            navigation(item);
          }}
        >
          <Image
            source={{ uri: item.location.picture }}
            style={{
              width: 59,
              height: 59,
              resizeMode: 'contain',
              borderRadius: 50,
            }}
          />
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '75%',
              marginLeft: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '800',
                  color: globalStyles.colors.white,
                }}
              >
                {item.litGenre.genre}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: 'chartreuse',
                }}
              >
                {item._count.charactersInRoom} / 4{' '}
                {item.status ? 'Esperando' : 'Jugando'}
              </Text>
            </View>
            <View style={{}}>
              <View style={{ flex: 0, flexDirection: 'row-reverse' }}>
                <Image
                  source={
                    item.language.language === 'Spanish'
                      ? require('../public/images/spain-flag.png')
                      : item.language.language === 'English'
                        ? require('../public/images/great-britain.png')
                        : require('../public/images/france.png')
                  }
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: globalStyles.colors.white,
                    marginRight: 10,
                  }}
                >
                  {item.language.language}
                </Text>
              </View>
              <StarRating rating={5} />
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
