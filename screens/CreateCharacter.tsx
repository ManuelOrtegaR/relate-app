import React from 'react';
import { GestureResponderEvent, Image, ScrollView, View } from 'react-native';
import {
  Button,
  HelperText,
  IconButton,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import globalStyles from '../App.styles.ts';
import { Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import DropdownSelect from 'react-native-input-select';
import { fakerES_MX as faker } from '@faker-js/faker';
import { countries as countriesData } from 'countries-list';
import { CreateCharacterScreenProps } from '../navigation/types.ts';

export const CreateCharacter: React.FC<CreateCharacterScreenProps> = (
  props,
) => {
  const [nationalityError, setNationalityError] = React.useState(false);
  const [genderError, setGenderError] = React.useState(false);
  const [languageError, setLanguageError] = React.useState(false);

  const theme = useTheme();

  const countries = Object.entries(countriesData).map(([code, country]) => ({
    label: country.name,
    value: code,
  }));

  props.navigation.setOptions({
    headerTitle: `Nuevo personaje`,
    headerTintColor: globalStyles.colors.white,
    headerTitleStyle: { color: globalStyles.colors.white },
    headerStyle: {
      backgroundColor: theme.colors.tertiary,
    },
  });

  const [face, setFace] = React.useState(0);
  const [hair, setHair] = React.useState(0);
  const [eye, setEye] = React.useState(0);
  const [mouth, setMouth] = React.useState(0);
  const [nose, setNose] = React.useState(0);

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: theme.colors.background,
        height: '100%',
        alignItems: 'center',
      }}
    >
      <ScrollView style={{ width: '100%' }}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            // const characterData = {
            //   info: characterInfo,
            //   avatar: values,
            // };
            // console.log({ characterData });
            // // TODO: post to create character
            // props.navigation.reset({
            //   index: 0,
            //   routes: [{ name: 'Home' }],
            // });
          }}
          validationSchema={toFormikValidationSchema(characterSchema)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setValues,
          }) => (
            <View style={{}}>
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
              <TextInput
                mode="flat"
                label="Nombre de tu personaje"
                placeholder="Ej: Scrotmcburguer"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                autoCapitalize="none"
                autoComplete="name"
                value={values.name}
                error={errors.name ? true : false}
                style={{
                  backgroundColor: globalStyles.colors.white,
                  marginTop: 20,
                }}
              />
              <HelperText
                type="error"
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                }}
                visible={errors.name && touched.name ? true : false}
              >
                Nombre de personaje inválido
              </HelperText>
              <TextInput
                mode="flat"
                label="Descripción del personaje"
                placeholder="Ej: Es un doctor que trabaja en una clínica a las afueras de la ciudad, le gusta el mar y leer libros..."
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                autoCapitalize="none"
                multiline={true}
                numberOfLines={4}
                value={values.description}
                error={errors.description ? true : false}
                style={{
                  backgroundColor: globalStyles.colors.white,
                }}
                right={
                  <TextInput.Affix
                    textStyle={{
                      color: values.description.length > 250 ? 'red' : 'black',
                    }}
                    text={`${values.description.length}/250`}
                  />
                }
              />
              <HelperText
                type="error"
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                }}
                visible={
                  (errors.description && touched.description) ||
                  values.description.length > 250
                    ? true
                    : false
                }
              >
                {values.description.length > 250
                  ? 'Descripción demasiado larga'
                  : 'Descripción inválida'}
              </HelperText>
              <TextInput
                mode="flat"
                label="Edad del personaje"
                keyboardType="number-pad"
                placeholder="Ej: 28"
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
                error={errors.age ? true : false}
                style={{
                  backgroundColor: globalStyles.colors.white,
                }}
              />
              <HelperText
                type="error"
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                }}
                visible={errors.age && touched.age ? true : false}
              >
                Edad requerida
              </HelperText>
              <DropdownSelect
                placeholder="Selecciona su género"
                options={[
                  { label: 'Hombre', value: 'male' },
                  { label: 'Mujer', value: 'female' },
                  { label: 'Otro', value: 'other' },
                ]}
                selectedValue={values.gender}
                placeholderStyle={{
                  color: genderError ? theme.colors.error : undefined,
                }}
                dropdownStyle={{
                  backgroundColor: globalStyles.colors.white,
                  borderTopRightRadius: 5,
                  borderTopLeftRadius: 5,
                  borderBottomEndRadius: 0,
                  borderBottomStartRadius: 0,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: genderError ? 2 : undefined,
                  borderColor: genderError ? theme.colors.error : undefined,
                }}
                onValueChange={(value: string) => {
                  setGenderError(false);
                  values.gender = value;
                }}
                primaryColor={theme.colors.primary}
              />
              <HelperText
                type="error"
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginTop: -25,
                }}
                visible={genderError}
              >
                Género requerido
              </HelperText>
              <DropdownSelect
                placeholder="Selecciona su idioma"
                options={[
                  { label: 'Español', value: 'ES' },
                  { label: 'Ingles', value: 'EN' },
                  { label: 'Frances', value: 'FR' },
                ]}
                selectedValue={values.language}
                placeholderStyle={{
                  color: languageError ? theme.colors.error : undefined,
                }}
                dropdownStyle={{
                  backgroundColor: globalStyles.colors.white,
                  borderTopRightRadius: 5,
                  borderTopLeftRadius: 5,
                  borderBottomEndRadius: 0,
                  borderBottomStartRadius: 0,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: languageError ? 2 : undefined,
                  borderColor: languageError ? theme.colors.error : undefined,
                }}
                onValueChange={(value: string) => {
                  setLanguageError(false);
                  values.language = value;
                }}
                primaryColor={theme.colors.primary}
              />
              <HelperText
                type="error"
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginTop: -25,
                }}
                visible={languageError}
              >
                Idioma requerido
              </HelperText>
              <DropdownSelect
                placeholder="Selecciona su nacionalidad"
                isSearchable
                options={countries}
                selectedValue={values.nationality}
                placeholderStyle={{
                  color: nationalityError ? theme.colors.error : undefined,
                }}
                dropdownStyle={{
                  backgroundColor: globalStyles.colors.white,
                  borderTopRightRadius: 5,
                  borderTopLeftRadius: 5,
                  borderBottomEndRadius: 0,
                  borderBottomStartRadius: 0,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: nationalityError ? 2 : undefined,
                  borderColor: nationalityError
                    ? theme.colors.error
                    : undefined,
                }}
                onValueChange={(value: string) => {
                  setNationalityError(false);
                  values.nationality = value;
                }}
                primaryColor={theme.colors.primary}
              />
              <HelperText
                type="error"
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginTop: -25,
                }}
                visible={nationalityError}
              >
                Nacionalidad requerida
              </HelperText>
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
                  values.name = faker.internet.displayName();
                  values.description =
                    faker.person.jobTitle() + faker.person.jobDescriptor();
                  values.age = faker.number
                    .int({ min: 18, max: 90 })
                    .toString();
                  values.gender = faker.helpers.arrayElement([
                    'male',
                    'female',
                    'other',
                  ]);
                  values.language = faker.helpers.arrayElement([
                    'ES',
                    'EN',
                    'FR',
                  ]);
                  values.nationality =
                    faker.helpers.arrayElement(countries).value;
                  setGenderError(false);
                  setLanguageError(false);
                  setNationalityError(false);
                }}
              >
                Generar aleatorio
              </Text>
              <Button
                mode="contained"
                loading={isSubmitting}
                contentStyle={{ height: 50 }}
                labelStyle={{ fontSize: 20 }}
                onPress={() => {
                  if (values.gender === '' || values.gender === null) {
                    setGenderError(true);
                  }
                  if (values.language === '' || values.language === null) {
                    setLanguageError(true);
                  }
                  if (
                    values.nationality === '' ||
                    values.nationality === null
                  ) {
                    setNationalityError(true);
                  }
                  if (!genderError && !languageError && !nationalityError) {
                    handleSubmit() as unknown as (
                      e: GestureResponderEvent,
                    ) => void;
                  }
                }}
              >
                Todo listo
              </Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};
