import { Formik } from 'formik';
import React from 'react';
import { GestureResponderEvent, View } from 'react-native';
import {
  Button,
  HelperText,
  Modal,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import globalStyles from '../App.styles.ts';
import DropdownSelect from 'react-native-input-select';
import { countries as countriesData } from 'countries-list';
import { faker } from '@faker-js/faker';

interface Props {
  visible: boolean;
  hideModal: () => void;
}

export const CreateRoom = (props: Props) => {
  const theme = useTheme();
  const [locationError, setLocationError] = React.useState(false);
  const [genderError, setGenderError] = React.useState(false);
  const [languageError, setLanguageError] = React.useState(false);

  const initialValues = {
    turns: '',
    language: '',
    location: '',
    litGenre: '',
  };

  const createRoomSchema = z.object({
    turns: z.enum(['3', '4', '5', '6', '7', '8', '9', '10']),
    language: z.enum(['ES', 'EN', 'FR']),
    location: z.string(),
    litGenre: z.string(),
  });

  const countries = Object.entries(countriesData).map(([code, country]) => ({
    label: country.name,
    value: code,
  }));

  const containerStyle = { padding: 20 };

  return (
    <Modal
      visible={props.visible}
      onDismiss={props.hideModal}
      contentContainerStyle={containerStyle}
    >
      <View
        style={{
          backgroundColor: globalStyles.colors.white,
          borderRadius: 30,
          padding: 20,
          borderWidth: 5,
          borderColor: theme.colors.primary,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
            color: theme.colors.primary,
          }}
        >
          Crea tu sala
        </Text>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            // props.navigation.navigate('Avatar', values);
          }}
          validationSchema={toFormikValidationSchema(createRoomSchema)}
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
              <TextInput
                mode="flat"
                label="Número de turnos"
                placeholder="Escoge turnos entre 3 y 10"
                onChangeText={handleChange('turns')}
                onBlur={handleBlur('turns')}
                autoCapitalize="none"
                keyboardType="number-pad"
                autoComplete="name"
                value={values.turns}
                error={errors.turns ? true : false}
                style={{
                  backgroundColor: 'white',
                }}
              />
              <HelperText
                type="error"
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                }}
                visible={errors.turns && touched.turns ? true : false}
              >
                Los turnos deben ser entre 3 a 10
              </HelperText>
              <DropdownSelect
                placeholder="Selecciona el género de la sala"
                options={[
                  { label: 'Fantasía', value: 'fantasy' },
                  { label: 'Misterio', value: 'mistery' },
                  { label: 'Comedia', value: 'comedy' },
                ]}
                selectedValue={values.litGenre}
                placeholderStyle={{
                  color: genderError ? theme.colors.error : undefined,
                }}
                dropdownStyle={{
                  backgroundColor: 'white',
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
                  values.litGenre = value;
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
                placeholder="Selecciona el idioma de la sala"
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
                  backgroundColor: 'white',
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
                placeholder="Selecciona la ubicacion"
                options={[
                  { label: 'Playa', value: 'beach' },
                  { label: 'Ciudad', value: 'city' },
                  { label: 'Bosque', value: 'forest' },
                ]}
                selectedValue={values.location}
                placeholderStyle={{
                  color: locationError ? theme.colors.error : undefined,
                }}
                dropdownStyle={{
                  backgroundColor: 'white',
                  borderTopRightRadius: 5,
                  borderTopLeftRadius: 5,
                  borderBottomEndRadius: 0,
                  borderBottomStartRadius: 0,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: locationError ? 2 : undefined,
                  borderColor: locationError ? theme.colors.error : undefined,
                }}
                onValueChange={(value: string) => {
                  setLocationError(false);
                  values.location = value;
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
                visible={locationError}
              >
                Ubicación requerida
              </HelperText>

              <Text
                style={[
                  globalStyles.space,
                  {
                    color: theme.colors.tertiary,
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 50,
                    textDecorationLine: 'underline',
                    alignSelf: 'center',
                  },
                ]}
                onPress={() => {
                  const turns = faker.number
                    .int({ min: 3, max: 10 })
                    .toString();
                  const litGenre = faker.helpers.arrayElement([
                    'fantasy',
                    'mistery',
                    'comedy',
                  ]);
                  const language = faker.helpers.arrayElement([
                    'ES',
                    'EN',
                    'FR',
                  ]);
                  const location = faker.helpers.arrayElement([
                    'beach',
                    'city',
                    'forest',
                  ]);
                  setValues({ turns, litGenre, language, location }, true);
                  setGenderError(false);
                  setLanguageError(false);
                  setLocationError(false);
                }}
              >
                Generar aleatorio
              </Text>

              <Button
                icon="check"
                mode="contained"
                loading={isSubmitting}
                contentStyle={{ height: 50 }}
                labelStyle={{ fontSize: 20 }}
                onPress={() => {
                  if (values.litGenre === '' || values.litGenre === null) {
                    setGenderError(true);
                  }
                  if (values.language === '' || values.language === null) {
                    setLanguageError(true);
                  }
                  if (values.location === '' || values.location === null) {
                    setLocationError(true);
                  }
                  if (!genderError && !languageError && !locationError) {
                    handleSubmit() as unknown as (
                      e: GestureResponderEvent,
                    ) => void;
                  }
                }}
              >
                Crear
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};
