import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import globalStyles from '../App.styles.ts';
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import {
  Button,
  Icon,
  IconButton,
  TextInput,
  useTheme,
  Text,
  Portal,
} from 'react-native-paper';
import { StarRating } from '../components/StarRating.tsx';

import { OnBoardingRooms } from '../components/OnBoardingRooms.tsx';
import { CreateRoom } from '../components/CreateRoom.tsx';
import { RoomsScreenProps } from '../navigation/types.ts';
import { useUser } from '../hooks/useUser.ts';
import { RoomItem, RoomOutput } from '../api/rooms/types.ts';
import { useRooms } from '../domain/useRooms.ts';
import { RoomsList } from '../components/RoomsList.tsx';
import { AvatarImage } from '../components/AvatarImage.tsx';

export const Rooms: React.FC<RoomsScreenProps> = (props) => {
  const theme = useTheme();
  const { user, character, sprites, loading } = useUser();
  const [visible, setVisible] = React.useState(false);
  const { rooms, isLoading, error } = useRooms();

  const goToRoom = (values: RoomOutput) => {
    const { room, chat, characterInRoom } = values;
    props.navigation.navigate('Room', {
      roomId: room.id,
      room,
      character: character!,
    });
  };

  const navigateToRoom = (item: RoomItem) => {
    props.navigation.navigate('Room', {
      roomId: item.id,
      character: character!,
      room: item,
    });
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={globalStyles.container}>
      <Portal>
        {user?.characters[0].characteristics === 'new' && <OnBoardingRooms />}
        <CreateRoom
          visible={visible}
          hideModal={hideModal}
          characterId={character?.id}
          goToRoom={goToRoom}
        />
      </Portal>
      {loading && <Text>Cargando</Text>}
      {user && character && (
        <View
          style={{
            flex: 0,
            marginTop: 70,
            flexDirection: 'row',
            width: '90%',
            alignItems: 'center',
            marginBottom: 50,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 50,
              width: 60,
              height: 60,
              marginRight: 20,
              justifyContent: 'center',
            }}
          >
            {sprites && <AvatarImage sprites={sprites} />}
          </View>
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              width: '75%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: globalStyles.colors.white,
                }}
              >
                {character.name}
              </Text>
              <View style={{ flex: 0, flexDirection: 'row' }}>
                <StarRating rating={5} />
              </View>
            </View>
            <View>
              <View style={{ flex: 0, flexDirection: 'row', marginBottom: 10 }}>
                <Icon source="language-ruby" size={20} color="yellow" />
                <Text
                  style={{
                    fontSize: 17,
                    color: globalStyles.colors.white,
                    fontWeight: '800',
                  }}
                >
                  {user.gems}
                </Text>
              </View>
              <View style={{ flex: 0, flexDirection: 'row' }}>
                <Icon source="bitcoin" size={20} color="yellow" />
                <Text
                  style={{
                    fontSize: 17,
                    color: globalStyles.colors.white,
                    fontWeight: '800',
                  }}
                >
                  {user.coins}
                </Text>
              </View>
            </View>
            <Image
              source={require('../public/images/mask-group-icons.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
      )}

      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          width: '90%',
          height: 40,
          justifyContent: 'space-between',
          marginBottom: 50,
        }}
      >
        <Button
          mode="contained"
          contentStyle={{ height: 40 }}
          labelStyle={{ fontSize: 20 }}
          style={{ marginRight: 20 }}
          onPress={() => showModal()}
        >
          Crear sala
        </Button>
        <TextInput
          mode="flat"
          placeholder="Buscar sala por ID"
          right={<TextInput.Icon icon="magnify" />}
          style={{
            backgroundColor: globalStyles.colors.white,
            height: 40,
            flex: 1,
          }}
        />
      </View>
      {rooms && <RoomsList rooms={rooms} navigation={navigateToRoom} />}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        <IconButton icon="arrow-left" iconColor="white" onPress={() => {}} />
        <Text
          variant="titleLarge"
          style={{ color: 'white', fontWeight: '800' }}
        >
          Pag 1/1
        </Text>
        <IconButton icon="arrow-right" iconColor="white" onPress={() => {}} />
      </View>
    </View>
  );
};
