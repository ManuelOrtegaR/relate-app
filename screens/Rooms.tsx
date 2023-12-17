import React from 'react';
import { Touchable, TouchableOpacity, View } from 'react-native';

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
import { RoomsScreenProps } from '../types.ts';
import { OnBoardingRooms } from '../components/OnBoardingRooms.tsx';
import { CreateRoom } from '../components/CreateRoom.tsx';

export const Rooms: React.FC<RoomsScreenProps> = (props) => {
  const theme = useTheme();
  const data = [
    {
      id: '1',
      name: 'Romance',
      status: 'waiting',
      language: 'Español',
      players: 2,
      stars: 5,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '2',
      name: 'Fantasia',
      status: 'waiting',
      language: 'Portugues',
      players: 1,
      stars: 4,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '3',
      name: 'Aventura',
      status: 'in-game',
      language: 'Ingles',
      players: 3,
      stars: 3,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '4',
      name: 'Accion',
      status: 'waiting',
      language: 'Frances',
      players: 4,
      stars: 2,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '5',
      name: 'Terror',
      status: 'waiting',
      language: 'Italiano',
      players: 4,
      stars: 1,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '6',
      name: 'Romance',
      status: 'waiting',
      language: 'Español',
      players: 2,
      stars: 5,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '7',
      name: 'Fantasia',
      status: 'waiting',
      language: 'Portugues',
      players: 1,
      stars: 4,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '8',
      name: 'Aventura',
      status: 'in-game',
      language: 'Ingles',
      players: 3,
      stars: 3,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '9',
      name: 'Accion',
      status: 'waiting',
      language: 'Frances',
      players: 4,
      stars: 2,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '10',
      name: 'Terror',
      status: 'waiting',
      language: 'Italiano',
      players: 4,
      stars: 1,
      imgURL: require('../public/images/romance.png'),
    },
  ];

  const dataOnBoarding = [
    {
      id: '1',
      name: 'Romance',
      status: 'waiting',
      language: 'Español',
      players: 2,
      stars: 5,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '2',
      name: 'Fantasia',
      status: 'waiting',
      language: 'Portugues',
      players: 1,
      stars: 4,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '3',
      name: 'Aventura',
      status: 'in-game',
      language: 'Ingles',
      players: 3,
      stars: 3,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '4',
      name: 'Accion',
      status: 'waiting',
      language: 'Frances',
      players: 4,
      stars: 2,
      imgURL: require('../public/images/romance.png'),
    },
    {
      id: '5',
      name: 'Terror',
      status: 'waiting',
      language: 'Italiano',
      players: 4,
      stars: 1,
      imgURL: require('../public/images/romance.png'),
    },
  ];

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={globalStyles.container}>
      <Portal>
        <OnBoardingRooms />
        <CreateRoom visible={visible} hideModal={hideModal} />
      </Portal>
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
        <Image
          source={{ uri: 'https://placehold.co/48/png' }}
          style={{
            width: 59,
            height: 59,
            borderRadius: 50,
            marginLeft: 4,
            resizeMode: 'contain',
            marginRight: 20,
          }}
        />
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
              Aventurera
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
                158
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
                158
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
      <FlatList
        scrollEnabled
        style={{ width: '90%' }}
        data={data}
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
              props.navigation.navigate('Room', {
                roomId: item.id,
                name: 'Aventurera',
                age: '29',
                description: 'es una aventurera buena',
                gender: 'female',
                language: 'Español',
                nationality: 'Colombiana',
              });
            }}
          >
            <Image
              source={require('../public/images/romance.png')}
              style={{
                width: 59,
                height: 59,
                resizeMode: 'contain',
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
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'chartreuse',
                  }}
                >
                  {item.players} / 4{' '}
                  {item.status === 'waiting' ? 'Esperando' : 'Jugando'}
                </Text>
              </View>
              <View style={{}}>
                <View style={{ flex: 0, flexDirection: 'row-reverse' }}>
                  <Image
                    source={require('../public/images/portugal.png')}
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
                    {item.language}
                  </Text>
                </View>
                <StarRating rating={5} />
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
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
          Pag 1/20
        </Text>
        <IconButton icon="arrow-right" iconColor="white" onPress={() => {}} />
      </View>
    </View>
  );
};
