import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import {
  Modal,
  Text,
  Portal,
  useTheme,
  Button,
  TextInput,
} from 'react-native-paper';
import { StarRating } from './StarRating';
import globalStyles from '../App.styles.ts';

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

export const OnBoardingRooms = () => {
  const theme = useTheme();
  const [visible, setVisible] = React.useState(0);
  const showModal = () => setVisible(0);
  const containerStyle = { padding: 20 };
  return (
    <>
      {visible === 0 && (
        <Modal
          visible={visible === 0}
          onDismiss={() => {
            setVisible(visible + 1);
          }}
          contentContainerStyle={containerStyle}
          style={{
            backgroundColor: '#0F0F0FA5',
            height: '100%',
            justifyContent: 'center',
            paddingLeft: 50,
          }}
        >
          <Text
            style={{
              color: '#F4C05F',
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            Bienvenido/a
          </Text>
          <Text
            style={{
              color: globalStyles.colors.white,
              fontSize: 30,
            }}
          >
            a las salas de chat
          </Text>
        </Modal>
      )}

      {visible === 1 && (
        <Modal
          visible={visible === 1}
          onDismiss={() => {
            setVisible(visible + 1);
          }}
          contentContainerStyle={containerStyle}
          style={{
            backgroundColor: '#0F0F0FA5',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              height: 50,
              justifyContent: 'space-between',
              marginBottom: 50,
              borderColor: 'white',
              borderWidth: 2,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Button
              mode="contained"
              contentStyle={{ height: 40 }}
              labelStyle={{ fontSize: 20 }}
              style={{ marginRight: 20 }}
              onPress={() => {
                setVisible(visible + 1);
              }}
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
              disabled
            />
          </View>
          <Text
            style={{
              color: '#F4C05F',
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            Aquí podrás crear una sala{' '}
            <Text
              style={{
                color: globalStyles.colors.white,
                fontSize: 30,
              }}
            >
              para practicar tu idioma favorito
            </Text>
          </Text>
        </Modal>
      )}

      {visible === 2 && (
        <Modal
          visible={visible === 2}
          onDismiss={() => {
            setVisible(visible + 1);
          }}
          contentContainerStyle={containerStyle}
          style={{
            backgroundColor: '#0F0F0FA5',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 50,
              borderColor: 'white',
              borderWidth: 2,
              backgroundColor: theme.colors.primary,
              borderRadius: 35,
              padding: 6,
              width: '60%',
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
                  Romance
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'chartreuse',
                  }}
                >
                  3 / 4 Esperando
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: globalStyles.colors.white,
              fontSize: 30,
            }}
          >
            Aquí encontrarás{' '}
            <Text
              style={{
                color: '#F4C05F',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              el género de la sala{' '}
              <Text
                style={{
                  color: globalStyles.colors.white,
                  fontSize: 30,
                }}
              >
                y también{' '}
                <Text
                  style={{
                    color: '#F4C05F',
                    fontSize: 30,
                    fontWeight: 'bold',
                  }}
                >
                  el número de participantes
                </Text>
              </Text>
            </Text>
          </Text>
        </Modal>
      )}

      {visible === 3 && (
        <Modal
          visible={visible === 3}
          onDismiss={() => {
            setVisible(visible + 1);
          }}
          contentContainerStyle={containerStyle}
          style={{
            backgroundColor: '#0F0F0FA5',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              marginBottom: 50,
              borderColor: 'white',
              borderWidth: 2,
              backgroundColor: theme.colors.primary,
              borderRadius: 35,
              padding: 6,
              justifyContent: 'center',
              width: '40%',
            }}
          >
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: 6,
              }}
            >
              <View
                style={{
                  height: 59,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row-reverse',
                  }}
                >
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
                    Portugues
                  </Text>
                </View>
                <StarRating rating={5} />
              </View>
            </View>
          </View>
          <Text
            style={{
              color: globalStyles.colors.white,
              fontSize: 30,
            }}
          >
            Del otro lado se encuentra{' '}
            <Text
              style={{
                color: '#F4C05F',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              el idioma de la sala{' '}
              <Text
                style={{
                  color: globalStyles.colors.white,
                  fontSize: 30,
                }}
              >
                y debajo{' '}
                <Text
                  style={{
                    color: '#F4C05F',
                    fontSize: 30,
                    fontWeight: 'bold',
                  }}
                >
                  la valoración según sus participantes
                </Text>
              </Text>
            </Text>
          </Text>
        </Modal>
      )}

      {visible === 4 && (
        <Modal
          visible={visible === 4}
          onDismiss={() => {
            setVisible(visible + 1);
          }}
          contentContainerStyle={containerStyle}
          style={{
            backgroundColor: '#0F0F0FA5',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              marginBottom: 50,
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 35,
              padding: 6,
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <FlatList
              scrollEnabled
              style={{ width: '100%' }}
              data={dataOnBoarding}
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
                    setVisible(visible + 1);
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
          </View>
          <Text
            style={{
              color: globalStyles.colors.white,
              fontSize: 30,
            }}
          >
            Puedes{' '}
            <Text
              style={{
                color: '#F4C05F',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >
              presionar en cualquier sala{' '}
              <Text
                style={{
                  color: globalStyles.colors.white,
                  fontSize: 30,
                }}
              >
                para iniciar tu aventura{' '}
              </Text>
            </Text>
          </Text>
        </Modal>
      )}
    </>
  );
};
