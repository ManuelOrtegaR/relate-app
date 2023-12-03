import { Formik } from 'formik';
import { Image, ScrollView, View } from 'react-native';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
import { countries as countriesData } from 'countries-list';

import globalStyles from '../App.styles.ts';

import { NicknameScreenProps } from '../types.ts';
import {
  Button,
  TextInput,
  useTheme,
  HelperText,
  Text,
} from 'react-native-paper';
import { GestureResponderEvent } from 'react-native';
import DropdownSelect from 'react-native-input-select';
import React from 'react';
import { fakerES_MX as faker } from '@faker-js/faker';

const nicknameSchema = z.object({
  name: z.string(),
  description: z.string(),
  nationality: z.string(),
  gender: z.string(),
  age: z.string(),
  language: z.string(),
});

const initialValues = {
  name: '',
  description: '',
  nationality: '',
  gender: '',
  age: '',
  language: '',
};

export const Nickname: React.FC<NicknameScreenProps> = (props) => {
  const [nationalityError, setNationalityError] = React.useState(false);
  const [genderError, setGenderError] = React.useState(false);
  const [languageError, setLanguageError] = React.useState(false);

  const theme = useTheme();

  const countries = Object.entries(countriesData).map(([code, country]) => ({
    label: country.name,
    value: code,
  }));

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
            marginBottom: 30,
            marginTop: 100,
          }}
        >
          Para una mejor experiencia,{' '}
          <Text
            variant="titleLarge"
            style={{ color: globalStyles.colors.white }}
          >
            describenos quien quieres ser
          </Text>
        </Text>
        <ScrollView
          style={{ width: '100%', marginLeft: 30 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              props.navigation.navigate('Avatar', values);
            }}
            validationSchema={toFormikValidationSchema(nicknameSchema)}
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
              <View style={[globalStyles.wrapper]}>
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
                        color:
                          values.description.length > 250 ? 'red' : 'black',
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
                      marginBottom: 50,
                      textDecorationLine: 'underline',
                      alignSelf: 'center',
                    },
                  ]}
                  onPress={() => {
                    const name = faker.internet.displayName();
                    const description =
                      faker.person.jobTitle() + faker.person.jobDescriptor();
                    const age = faker.number
                      .int({ min: 18, max: 90 })
                      .toString();
                    const gender = faker.helpers.arrayElement([
                      'male',
                      'female',
                      'other',
                    ]);
                    const language = faker.helpers.arrayElement([
                      'ES',
                      'EN',
                      'FR',
                    ]);
                    const nationality =
                      faker.helpers.arrayElement(countries).value;
                    setValues(
                      { name, description, age, gender, language, nationality },
                      true,
                    );
                    setGenderError(false);
                    setLanguageError(false);
                    setNationalityError(false);
                  }}
                >
                  Generar aleatorio
                </Text>

                <Button
                  icon="check"
                  mode="contained"
                  loading={isSubmitting}
                  style={{ marginBottom: 50 }}
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
                  Continuar
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};
