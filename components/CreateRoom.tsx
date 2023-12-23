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
import { faker } from '@faker-js/faker';
import { useGameIds } from '../domain/useGameIds.ts';
import { TFlatList } from 'react-native-input-select/lib/typescript/types/index.types';
import { createRoom } from '../api/rooms/index.ts';

interface Props {
  visible: boolean;
  hideModal: () => void;
  characterId: string | undefined;
  goToRoom: (values: any) => void;
}

export const CreateRoom = (props: Props) => {
  const theme = useTheme();
  const [locationError, setLocationError] = React.useState(false);
  const [genderError, setGenderError] = React.useState(false);
  const [languageError, setLanguageError] = React.useState(false);
  const { gameIds, error, isLoading } = useGameIds();

  const initialValues = {
    turns: '3',
    languageId: '',
    locationId: '',
    litGenreId: '',
  };

  const createRoomSchema = z.object({
    turns: z.enum(['3', '4', '5', '6', '7', '8', '9', '10']),
    languageId: z.string(),
    locationId: z.string(),
    litGenreId: z.string(),
  });

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
            if (!props.characterId) return;
            try {
              const info = {
                ...values,
                turns: parseInt(values.turns),
                characterId: props.characterId,
              };
              const response = await createRoom(info);
              props.goToRoom(response);
              props.hideModal();
            } catch (error) {
              console.log(error);
            }
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
                  { label: 'Ficción', value: '653fe8dddc42d0b2ad0c4189' },
                  { label: 'Misterio', value: '653fe8dbf25bc294846efae3' },
                  { label: 'Horror', value: '653fe8d9d9165274b7dbcf74' },
                  { label: 'Romance', value: '653fe8d6a6198d53ee0a40a1' },
                  { label: 'Comedia', value: '653fe8d32e90d9522b8f4d8c' },
                ]}
                selectedValue={values.litGenreId}
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
                  values.litGenreId = value;
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
                options={gameIds?.language as unknown as TFlatList}
                optionLabel={'language'}
                optionValue={'id'}
                selectedValue={values.languageId}
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
                  values.languageId = value;
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
                  { label: 'Playa', value: '653fea2cf25b734351d0473c' },
                  { label: 'Ciudad', value: '653fea29b3c8d3e8245ba0a9' },
                  { label: 'Cueva', value: '653fea30c20f1935d465257c' },
                ]}
                selectedValue={values.locationId}
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
                  values.locationId = value;
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
                  const litGenreId = faker.helpers.arrayElement([
                    '653fe8d32e90d9522b8f4d8c',
                    '653fe8d6a6198d53ee0a40a1',
                    '653fe8d9d9165274b7dbcf74',
                    '653fe8dbf25bc294846efae3',
                    '653fe8dddc42d0b2ad0c4189',
                  ]);
                  const languageId = faker.helpers.arrayElement(
                    gameIds!.language,
                  ).id;
                  const locationId = faker.helpers.arrayElement([
                    '653fea30c20f1935d465257c',
                    '653fea2cf25b734351d0473c',
                    '653fea29b3c8d3e8245ba0a9',
                  ]);
                  setValues(
                    { turns, litGenreId, languageId, locationId },
                    true,
                  );
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
                  if (values.litGenreId === '' || values.litGenreId === null) {
                    setGenderError(true);
                  }
                  if (values.languageId === '' || values.languageId === null) {
                    setLanguageError(true);
                  }
                  if (values.locationId === '' || values.locationId === null) {
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
