import React from 'react';
import { Image, View } from 'react-native';
import { Button, Portal, Text, useTheme } from 'react-native-paper';
import globalStyles from '../App.styles.ts';
import { CharacterScreenProps } from '../types';
import { ConfirmModal } from '../components/ConfirmModal.tsx';

const data = {
  id: '1',
  avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
  info: {
    age: '40',
    description: 'Product Owner de Programa FuturoDirecto',
    charateristics: ['millionarie', 'married'],
    gender: 'male',
    language: 'FR',
    name: 'MaríaJosé_SedilloQuiroz',
    nationality: 'ZW',
  },
};

const profilePhotoUrl = 'https://placehold.co/200/png';

export const Character: React.FC<CharacterScreenProps> = (props) => {
  const theme = useTheme();

  props.navigation.setOptions({
    headerTitle: `Aventurera`,
    headerTintColor: globalStyles.colors.white,
    headerTitleStyle: { color: globalStyles.colors.white },
    headerStyle: {
      backgroundColor: theme.colors.tertiary,
    },
  });

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const onConfirm = () => {
    console.log('confirmed');
  };
  return (
    <View style={{ padding: 20 }}>
      <Portal>
        <ConfirmModal
          visible={visible}
          hideModal={hideModal}
          onConfirm={onConfirm}
          title="Eliminar personaje"
          message="¿Estás seguro de que quieres eliminar este personaje?"
        />
      </Portal>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          marginBottom: 20,
        }}
      >
        <Image
          source={{ uri: profilePhotoUrl }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            resizeMode: 'contain',
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          {data.info.name}
        </Text>
      </View>
      <View style={{ gap: 10, marginBottom: 50 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>
          Información
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          Edad: {data.info.age}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          Género: {data.info.gender}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          Idioma: {data.info.language}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          Nacionalidad: {data.info.nationality}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          Descripción: {data.info.description}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          Características: {data.info.charateristics.join(', ')}
        </Text>
      </View>
      <View style={{ gap: 20 }}>
        <Button
          icon="check"
          mode="contained"
          contentStyle={{ height: 50 }}
          labelStyle={{}}
          onPress={() => {}}
        >
          Seleccionar
        </Button>
        <Button
          icon="close"
          mode="contained"
          contentStyle={{ height: 50, backgroundColor: theme.colors.tertiary }}
          labelStyle={{}}
          onPress={showModal}
        >
          Eliminar
        </Button>
      </View>
    </View>
  );
};
