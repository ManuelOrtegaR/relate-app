import { Formik } from 'formik';
import { Image, View } from 'react-native';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';

import globalStyles from '../App.styles.ts';

import { AvatarScreenProps } from '../navigation/types.ts';
import { Button, useTheme, Text, IconButton } from 'react-native-paper';
import { GestureResponderEvent } from 'react-native';
import { useState } from 'react';
import { useSprites } from '../domain/useSprites.ts';
import { Sprite } from '../api/avatar/types.ts';
import { createCharacter } from '../api/character/index.ts';
import { CreateCharacter } from '../api/character/types.ts';

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

export const Avatar: React.FC<AvatarScreenProps> = (props) => {
  const { sprites, error, isLoading } = useSprites();

  let eyes: Sprite[] = [
    {
      id: '',
      spriteName: '',
      spriteUrl: '',
    },
  ];
  let faces: Sprite[] = [
    {
      id: '',
      spriteName: '',
      spriteUrl: '',
    },
  ];
  let hairs: Sprite[] = [
    {
      id: '',
      spriteName: '',
      spriteUrl: '',
    },
  ];
  let mouths: Sprite[] = [
    {
      id: '',
      spriteName: '',
      spriteUrl: '',
    },
  ];
  let noses: Sprite[] = [
    {
      id: '',
      spriteName: '',
      spriteUrl: '',
    },
  ];

  if (!error && sprites) {
    eyes = sprites?.eyes;
    faces = sprites?.faces;
    hairs = sprites?.hairs;
    mouths = sprites?.mouths;
    noses = sprites?.noses;
  }

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
        {isLoading && <Text>Cargando</Text>}
        {error && <Text>Error</Text>}
        {sprites && !error && !isLoading && (
          <>
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
                const info: CreateCharacter = {
                  characterData: {
                    characteristics: 'new',
                    age: characterInfo.age,
                    genderId: characterInfo.genderId,
                    languageId: characterInfo.languageId,
                    name: characterInfo.name,
                    nacionality: characterInfo.nationality,
                    description: characterInfo.description,
                  },
                  avatarData: {
                    faceId: faces[values.face].id,
                    hairId: hairs[values.hair].id,
                    eyeId: eyes[values.eye].id,
                    mouthId: mouths[values.mouth].id,
                    noseId: noses[values.nose].id,
                  },
                };
                try {
                  await createCharacter(info);
                  props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
              validationSchema={toFormikValidationSchema(avatarSchema)}
            >
              {({ values, handleSubmit, isSubmitting }) => (
                <View style={[globalStyles.wrapper]}>
                  <Image
                    source={{ uri: faces[values.face].spriteUrl }}
                    style={{
                      width: 200,
                      height: 250,
                      alignSelf: 'center',
                    }}
                  />
                  <Image
                    source={{ uri: hairs![values.hair].spriteUrl }}
                    style={{
                      width: 200,
                      height: 250,
                      alignSelf: 'center',
                      position: 'absolute',
                    }}
                  />
                  <Image
                    source={{ uri: eyes![values.eye].spriteUrl }}
                    style={{
                      width: 200,
                      height: 250,
                      alignSelf: 'center',
                      position: 'absolute',
                    }}
                  />
                  <Image
                    source={{ uri: noses![values.nose].spriteUrl }}
                    style={{
                      width: 200,
                      height: 250,
                      alignSelf: 'center',
                      position: 'absolute',
                    }}
                  />
                  <Image
                    source={{ uri: mouths![values.mouth].spriteUrl }}
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
                      disabled={isLoading}
                      onPress={() => {
                        if (values.face === 0 && faces) {
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
                      disabled={isLoading}
                      onPress={() => {
                        if (faces && values.face >= faces.length - 1) {
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
                      disabled={isLoading}
                      onPress={() => {
                        if (values.eye === 0 && eyes) {
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
                      disabled={isLoading}
                      onPress={() => {
                        if (eyes && values.eye >= eyes.length - 1) {
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
                      disabled={isLoading}
                      onPress={() => {
                        if (values.nose === 0 && noses) {
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
                      disabled={isLoading}
                      onPress={() => {
                        if (noses && values.nose >= noses.length - 1) {
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
                      disabled={isLoading}
                      onPress={() => {
                        if (values.mouth === 0 && mouths) {
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
                      disabled={isLoading}
                      onPress={() => {
                        if (mouths && values.mouth >= mouths.length - 1) {
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
                      disabled={isLoading}
                      onPress={() => {
                        if (values.hair === 0 && hairs) {
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
                      disabled={isLoading}
                      onPress={() => {
                        if (hairs && values.hair >= hairs.length - 1) {
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
                      handleSubmit as unknown as (
                        e: GestureResponderEvent,
                      ) => void
                    }
                  >
                    Todo listo
                  </Button>
                </View>
              )}
            </Formik>
          </>
        )}
      </View>
    </View>
  );
};
