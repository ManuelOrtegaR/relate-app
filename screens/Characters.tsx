import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { CharactersScreenProps } from '../types';
import globalStyles from '../App.styles.ts';
import { StarRating } from '../components/StarRating.tsx';

export const Characters: React.FC<CharactersScreenProps> = (props) => {
  const theme = useTheme();
  props.navigation.setOptions({
    headerTitle: `Mis personajes`,
    headerTintColor: globalStyles.colors.white,
    headerTitleStyle: { color: globalStyles.colors.white },
    headerStyle: {
      backgroundColor: theme.colors.tertiary,
    },
  });

  const data = [
    {
      id: '1',
      avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
      info: {
        age: '40',
        description: 'Product Owner de Programa FuturoDirecto',
        gender: 'male',
        language: 'FR',
        name: 'MaríaJosé_SedilloQuiroz',
        nationality: 'ZW',
      },
    },
    {
      id: '2',
      avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
      info: {
        age: '40',
        description: 'Product Owner de Programa FuturoDirecto',
        gender: 'male',
        language: 'FR',
        name: 'MaríaJosé_SedilloQuiroz',
        nationality: 'ZW',
      },
    },
    {
      id: '3',
      avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
      info: {
        age: '40',
        description: 'Product Owner de Programa FuturoDirecto',
        gender: 'male',
        language: 'FR',
        name: 'MaríaJosé_SedilloQuiroz',
        nationality: 'ZW',
      },
    },
    {
      id: '4',
      avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
      info: {
        age: '40',
        description: 'Product Owner de Programa FuturoDirecto',
        gender: 'male',
        language: 'FR',
        name: 'MaríaJosé_SedilloQuiroz',
        nationality: 'ZW',
      },
    },
    {
      id: '5',
      avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
      info: {
        age: '40',
        description: 'Product Owner de Programa FuturoDirecto',
        gender: 'male',
        language: 'FR',
        name: 'MaríaJosé_SedilloQuiroz',
        nationality: 'ZW',
      },
    },
    {
      id: '6',
      avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
      info: {
        age: '40',
        description: 'Product Owner de Programa FuturoDirecto',
        gender: 'male',
        language: 'FR',
        name: 'MaríaJosé_SedilloQuiroz',
        nationality: 'ZW',
      },
    },
    {
      id: '7',
      avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
      info: {
        age: '40',
        description: 'Product Owner de Programa FuturoDirecto',
        gender: 'male',
        language: 'FR',
        name: 'MaríaJosé_SedilloQuiroz',
        nationality: 'ZW',
      },
    },
    {
      id: '8',
      avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
      info: {
        age: '40',
        description: 'Product Owner de Programa FuturoDirecto',
        gender: 'male',
        language: 'FR',
        name: 'MaríaJosé_SedilloQuiroz',
        nationality: 'ZW',
      },
    },
    {
      id: '9',
      avatar: { eye: 0, face: 0, hair: 0, mouth: 0, nose: 0 },
      info: {
        age: '40',
        description: 'Product Owner de Programa FuturoDirecto',
        gender: 'male',
        language: 'FR',
        name: 'MaríaJosé_SedilloQuiroz',
        nationality: 'ZW',
      },
    },
  ];

  const selected = '3';

  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <FlatList
        scrollEnabled
        style={{ width: '90%', marginBottom: 20, height: '85%' }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 0,
              flexDirection: 'row',
              backgroundColor:
                selected === item.id ? theme.colors.primary : undefined,
              borderRadius: 35,
              borderWidth: 2,
              borderColor:
                selected !== item.id ? theme.colors.primary : undefined,
              padding: 6,
              marginBottom: 10,
            }}
            onPress={() => {
              props.navigation.navigate('Character');
              // props.navigation.navigate('Character', {
              //   roomId: item.id,
              //   name: 'Aventurera',
              //   age: '29',
              //   description: 'es una aventurera buena',
              //   gender: 'female',
              //   language: 'Español',
              //   nationality: 'Colombiana',
              // });
            }}
          >
            <Image
              source={require('../public/images/avatar.png')}
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
                    fontSize: 15,
                    fontWeight: '800',
                    color:
                      selected === item.id
                        ? globalStyles.colors.white
                        : theme.colors.primary,
                  }}
                >
                  {item.info.name}
                </Text>
                <StarRating rating={5} />
              </View>
              <View style={{}}>
                <View style={{ flex: 0, flexDirection: 'row-reverse' }}>
                  <Text
                    style={{
                      fontSize: 17,
                      color:
                        selected === item.id
                          ? globalStyles.colors.white
                          : theme.colors.primary,
                      marginRight: 10,
                    }}
                  >
                    Ver mas...
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button
        mode="outlined"
        loading={false}
        contentStyle={{ height: 50 }}
        labelStyle={{ fontSize: 20 }}
        style={{ marginBottom: 20 }}
        onPress={() => props.navigation.navigate('CreateCharacter')}
      >
        Nuevo personaje
      </Button>
    </View>
  );
};
