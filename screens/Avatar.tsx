import { Formik } from 'formik';
import { Image, View } from 'react-native';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';

import globalStyles from '../App.styles.ts';

import { AvatarScreenProps } from '../types.ts';
import {
  Button,
  TextInput,
  useTheme,
  HelperText,
  Text,
  IconButton,
} from 'react-native-paper';
import { GestureResponderEvent } from 'react-native';
import { useState } from 'react';

const avatarSchema = z.object({
  face: z.number(),
  hair: z.number(),
  eye: z.number(),
  mouth: z.number(),
  nose: z.number(),
});

const initialValues = {
  face: 0,
  hair: 0,
  eye: 0,
  mouth: 0,
  nose: 0,
};

const faces = [
  {
    id: 1,
    name: 'Rostro 1',
    sprite: require('../assets/sprites/faces/face_1.png'),
  },
  {
    id: 2,
    name: 'Rostro 2',
    sprite: require('../assets/sprites/faces/face_2.png'),
  },
  {
    id: 3,
    name: 'Rostro 3',
    sprite: require('../assets/sprites/faces/face_3.png'),
  },
  {
    id: 4,
    name: 'Rostro 4',
    sprite: require('../assets/sprites/faces/face_4.png'),
  },
  {
    id: 5,
    name: 'Rostro 5',
    sprite: require('../assets/sprites/faces/face_5.png'),
  },
];

const hairs = [
  {
    id: 1,
    name: 'Cabello 1',
    sprite: require('../assets/sprites/hairs/hair_1.png'),
  },
  {
    id: 2,
    name: 'Cabello 2',
    sprite: require('../assets/sprites/hairs/hair_2.png'),
  },
  {
    id: 3,
    name: 'Cabello 3',
    sprite: require('../assets/sprites/hairs/hair_3.png'),
  },
  {
    id: 4,
    name: 'Cabello 4',
    sprite: require('../assets/sprites/hairs/hair_4.png'),
  },
  {
    id: 5,
    name: 'Cabello 5',
    sprite: require('../assets/sprites/hairs/hair_5.png'),
  },
];

const eyes = [
  {
    id: 1,
    name: 'Ojos 1',
    sprite: require('../assets/sprites/eyes/eyes_1.png'),
  },
  {
    id: 2,
    name: 'Ojos 2',
    sprite: require('../assets/sprites/eyes/eyes_2.png'),
  },
  {
    id: 3,
    name: 'Ojos 3',
    sprite: require('../assets/sprites/eyes/eyes_3.png'),
  },
  {
    id: 4,
    name: 'Ojos 4',
    sprite: require('../assets/sprites/eyes/eyes_4.png'),
  },
  {
    id: 5,
    name: 'Ojos 5',
    sprite: require('../assets/sprites/eyes/eyes_5.png'),
  },
];

const mouths = [
  {
    id: 1,
    name: 'Boca 1',
    sprite: require('../assets/sprites/mouth/mouth_1.png'),
  },
  {
    id: 2,
    name: 'Boca 2',
    sprite: require('../assets/sprites/mouth/mouth_2.png'),
  },
  {
    id: 3,
    name: 'Boca 3',
    sprite: require('../assets/sprites/mouth/mouth_3.png'),
  },
  {
    id: 4,
    name: 'Boca 4',
    sprite: require('../assets/sprites/mouth/mouth_4.png'),
  },
  {
    id: 5,
    name: 'Boca 5',
    sprite: require('../assets/sprites/mouth/mouth_5.png'),
  },
];

const noses = [
  {
    id: 1,
    name: 'Nariz 1',
    sprite: require('../assets/sprites/noses/nose_1.png'),
  },
  {
    id: 2,
    name: 'Nariz 2',
    sprite: require('../assets/sprites/noses/nose_2.png'),
  },
  {
    id: 3,
    name: 'Nariz 3',
    sprite: require('../assets/sprites/noses/nose_3.png'),
  },
  {
    id: 4,
    name: 'Nariz 4',
    sprite: require('../assets/sprites/noses/nose_4.png'),
  },
  {
    id: 5,
    name: 'Nariz 5',
    sprite: require('../assets/sprites/noses/nose_5.png'),
  },
];

export const Avatar: React.FC<AvatarScreenProps> = (props) => {
  const [face, setFace] = useState(0);
  const [hair, setHair] = useState(0);
  const [eye, setEye] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [nose, setNose] = useState(0);
  const characterInfo = props.route.params;
  const theme = useTheme();

  return (
    <View style={[globalStyles.container, { justifyContent: 'space-between' }]}>
      <Image
        source={require('../assets/background-chat-icon.png')}
        style={globalStyles.backgroundImage}
      />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
        }}
      >
        <Text
          variant="titleLarge"
          style={{
            color: globalStyles.colors.light,
            fontWeight: 'bold',
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          Ahora,{' '}
          <Text
            variant="titleLarge"
            style={{ color: globalStyles.colors.white }}
          >
            escoge tu apariencia
          </Text>
        </Text>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            const characterData = {
              info: characterInfo,
              avatar: values,
            };
            console.log({ characterData });
            // TODO: post to create character
            props.navigation.navigate('Home');
          }}
          validationSchema={toFormikValidationSchema(avatarSchema)}
        >
          {({ values, handleSubmit, isSubmitting }) => (
            <View style={[globalStyles.wrapper]}>
              <Image
                source={faces[values.face].sprite}
                style={{
                  width: 200,
                  height: 250,
                  alignSelf: 'center',
                }}
              />
              <Image
                source={hairs[values.hair].sprite}
                style={{
                  width: 200,
                  height: 250,
                  alignSelf: 'center',
                  position: 'absolute',
                }}
              />
              <Image
                source={eyes[values.eye].sprite}
                style={{
                  width: 200,
                  height: 250,
                  alignSelf: 'center',
                  position: 'absolute',
                }}
              />
              <Image
                source={noses[values.nose].sprite}
                style={{
                  width: 200,
                  height: 250,
                  alignSelf: 'center',
                  position: 'absolute',
                }}
              />
              <Image
                source={mouths[values.mouth].sprite}
                style={{
                  width: 200,
                  height: 250,
                  alignSelf: 'center',
                  position: 'absolute',
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 50,
                }}
              >
                <IconButton
                  icon="arrow-left"
                  iconColor="white"
                  onPress={() => {
                    if (values.face === 0) {
                      values.face = faces.length - 1;
                      setFace(faces.length - 1);
                    } else {
                      setFace(face - 1);
                      values.face = values.face - 1;
                    }
                  }}
                />
                <Text variant="titleLarge" style={{ color: 'white' }}>
                  Rostro
                </Text>
                <IconButton
                  icon="arrow-right"
                  iconColor="white"
                  onPress={() => {
                    if (values.face >= faces.length - 1) {
                      values.face = 0;
                      setFace(0);
                    } else {
                      setFace(face + 1);
                      values.face = values.face + 1;
                    }
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 50,
                }}
              >
                <IconButton
                  icon="arrow-left"
                  iconColor="white"
                  onPress={() => {
                    if (values.eye === 0) {
                      values.eye = eyes.length - 1;
                      setEye(eyes.length - 1);
                    } else {
                      setEye(eye - 1);
                      values.eye = values.eye - 1;
                    }
                  }}
                />
                <Text variant="titleLarge" style={{ color: 'white' }}>
                  Ojos
                </Text>
                <IconButton
                  icon="arrow-right"
                  iconColor="white"
                  onPress={() => {
                    if (values.eye >= eyes.length - 1) {
                      values.eye = 0;
                      setEye(0);
                    } else {
                      setEye(eye + 1);
                      values.eye = values.eye + 1;
                    }
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 50,
                }}
              >
                <IconButton
                  icon="arrow-left"
                  iconColor="white"
                  onPress={() => {
                    if (values.nose === 0) {
                      values.nose = noses.length - 1;
                      setNose(noses.length - 1);
                    } else {
                      setNose(nose - 1);
                      values.nose = values.nose - 1;
                    }
                  }}
                />
                <Text variant="titleLarge" style={{ color: 'white' }}>
                  Nariz
                </Text>
                <IconButton
                  icon="arrow-right"
                  iconColor="white"
                  onPress={() => {
                    if (values.nose >= noses.length - 1) {
                      values.nose = 0;
                      setNose(0);
                    } else {
                      setNose(nose + 1);
                      values.nose = values.nose + 1;
                    }
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 50,
                }}
              >
                <IconButton
                  icon="arrow-left"
                  iconColor="white"
                  onPress={() => {
                    if (values.mouth === 0) {
                      values.mouth = mouths.length - 1;
                      setMouth(mouths.length - 1);
                    } else {
                      setMouth(mouth - 1);
                      values.mouth = values.mouth - 1;
                    }
                  }}
                />
                <Text variant="titleLarge" style={{ color: 'white' }}>
                  Boca
                </Text>
                <IconButton
                  icon="arrow-right"
                  iconColor="white"
                  onPress={() => {
                    if (values.mouth >= mouths.length - 1) {
                      values.mouth = 0;
                      setMouth(0);
                    } else {
                      setMouth(mouth + 1);
                      values.mouth = values.mouth + 1;
                    }
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 50,
                }}
              >
                <IconButton
                  icon="arrow-left"
                  iconColor="white"
                  onPress={() => {
                    if (values.hair === 0) {
                      values.hair = hairs.length - 1;
                      setHair(hairs.length - 1);
                    } else {
                      setHair(hair - 1);
                      values.hair = values.hair - 1;
                    }
                  }}
                />
                <Text variant="titleLarge" style={{ color: 'white' }}>
                  Cabello
                </Text>
                <IconButton
                  icon="arrow-right"
                  iconColor="white"
                  onPress={() => {
                    if (values.hair >= hairs.length - 1) {
                      values.hair = 0;
                      setHair(0);
                    } else {
                      setHair(hair + 1);
                      values.hair = values.hair + 1;
                    }
                  }}
                />
              </View>
              <Text
                style={[
                  globalStyles.space,
                  {
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginBottom: 50,
                    textDecorationLine: 'underline',
                    alignSelf: 'center',
                  },
                ]}
                onPress={() => {
                  const randonNumber1 = Math.floor(Math.random() * 5);
                  values.face = randonNumber1;
                  setFace(randonNumber1);
                  const randonNumber2 = Math.floor(Math.random() * 5);
                  values.eye = randonNumber2;
                  setEye(randonNumber2);
                  const randonNumber3 = Math.floor(Math.random() * 5);
                  values.nose = randonNumber3;
                  setNose(randonNumber3);
                  const randonNumber4 = Math.floor(Math.random() * 5);
                  values.mouth = randonNumber4;
                  setMouth(randonNumber4);
                  const randonNumber5 = Math.floor(Math.random() * 5);
                  values.hair = randonNumber5;
                  setHair(randonNumber5);
                }}
              >
                Generar aleatorio
              </Text>
              <Button
                mode="contained"
                loading={isSubmitting}
                contentStyle={{ height: 50 }}
                labelStyle={{ fontSize: 20 }}
                onPress={
                  handleSubmit as unknown as (e: GestureResponderEvent) => void
                }
              >
                Todo listo
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
