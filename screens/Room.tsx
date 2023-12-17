import React from 'react';
import { ScrollView, View } from 'react-native';

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
} from 'react-native-paper';
import { RoomScreenProps } from '../types';

export const Room: React.FC<RoomScreenProps> = (props) => {
  const theme = useTheme();
  props.navigation.setOptions({
    headerTitle: `ID de la sala #${props.route.params.roomId}`,
    headerTintColor: globalStyles.colors.white,
    headerTitleStyle: { color: globalStyles.colors.white },
    headerStyle: {
      backgroundColor: theme.colors.tertiary,
    },
  });

  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../assets/background-chat-icon.png')}
        style={[globalStyles.backgroundImage, { width: 400 }]}
      />
      <View
        style={{
          flex: 0,

          alignItems: 'center',
          marginBottom: 30,
          marginTop: 30,
        }}
      >
        <Text
          style={[
            globalStyles.title,
            {
              fontSize: 20,
              fontWeight: '800',
              color: '#F4C05F',
            },
          ]}
        >
          Una aventura inesperada en la playaaa que no se pudo encontrar
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignContent: 'center',
          }}
        >
          <Text
            style={[
              globalStyles.title,
              {
                fontSize: 20,
                fontWeight: '800',
                color: globalStyles.colors.white,
                marginRight: 10,
              },
            ]}
          >
            Español
          </Text>
          <Image
            source={require('../public/images/portugal.png')}
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
          gap: 10,
          width: '90%',
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
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
            Aventurera
          </Text>
        </View>
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
            Aventurera
          </Text>
        </View>
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
            Aventurera
          </Text>
        </View>
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
            Aventurera
          </Text>
        </View>
      </View>
      <ScrollView
        style={{ width: '100%', marginLeft: 30 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            width: '90%',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: 'https://placehold.co/48/png' }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <View
            style={{
              width: '85%',
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 17,
                fontWeight: '800',
              }}
            >
              Aventurera
            </Text>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Oi pessoal! Descobri algo incrível hoje. Encontrei um portal
              digital estranho enquanto navegava na web
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            width: '90%',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: 'https://placehold.co/48/png' }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <View
            style={{
              width: '85%',
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 17,
                fontWeight: '800',
              }}
            >
              Aventurera
            </Text>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Oi pessoal! Descobri algo incrível hoje. Encontrei um portal
              digital estranho enquanto navegava na web
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            width: '90%',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: 'https://placehold.co/48/png' }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <View
            style={{
              width: '85%',
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 17,
                fontWeight: '800',
              }}
            >
              Aventurera
            </Text>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Oi pessoal! Descobri algo incrível hoje. Encontrei um portal
              digital estranho enquanto navegava na web
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            width: '90%',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: 'https://placehold.co/48/png' }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <View
            style={{
              width: '85%',
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 17,
                fontWeight: '800',
              }}
            >
              Aventurera
            </Text>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Oi pessoal! Descobri algo incrível hoje. Encontrei um portal
              digital estranho enquanto navegava na web
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            width: '90%',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: 'https://placehold.co/48/png' }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <View
            style={{
              width: '85%',
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 17,
                fontWeight: '800',
              }}
            >
              Aventurera
            </Text>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Oi pessoal! Descobri algo incrível hoje. Encontrei um portal
              digital estranho enquanto navegava na web
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            width: '90%',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: 'https://placehold.co/48/png' }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <View
            style={{
              width: '85%',
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 17,
                fontWeight: '800',
              }}
            >
              Aventurera
            </Text>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Oi pessoal! Descobri algo incrível hoje. Encontrei um portal
              digital estranho enquanto navegava na web
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            width: '90%',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <Image
            source={{ uri: 'https://placehold.co/48/png' }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              resizeMode: 'contain',
              marginRight: 10,
            }}
          />
          <View
            style={{
              width: '85%',
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 17,
                fontWeight: '800',
              }}
            >
              Aventurera
            </Text>
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Oi pessoal! Descobri algo incrível hoje. Encontrei um portal
              digital estranho enquanto navegava na web
            </Text>
          </View>
        </View>
      </ScrollView>
      <TextInput
        mode="flat"
        placeholder="Mensaje..."
        right={<TextInput.Icon icon="send" />}
        style={{
          backgroundColor: globalStyles.colors.white,
          width: '90%',
          marginBottom: 30,
          marginTop: 20,
        }}
      />
      {/* <Button
        mode="contained"
        icon="thumb-up"
        contentStyle={{ height: 40, flexDirection: 'row-reverse' }}
        labelStyle={{ fontSize: 20 }}
        style={{
          marginBottom: 30,
          marginTop: 20,
          marginRight: 30,
          alignSelf: 'flex-end',
        }}
        onPress={() => {}}
      >
        Reaccionar
      </Button> */}
    </View>
  );
};
