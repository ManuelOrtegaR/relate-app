import React from 'react';
import { GestureResponderEvent, View, Image } from 'react-native';
import {
  Button,
  HelperText,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import globalStyles from '../App.styles.ts';
import { ProfilePhotoScreenProps } from '../types.ts';
import { Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';

export const ProfilePhoto: React.FC<ProfilePhotoScreenProps> = (props) => {
  const [changeUsername, setChangeUsername] = React.useState(false);
  const theme = useTheme();
  props.navigation.setOptions({
    headerTitle: `Foto de perfil`,
    headerTintColor: globalStyles.colors.white,
    headerTitleStyle: { color: globalStyles.colors.white },
    headerStyle: {
      backgroundColor: theme.colors.tertiary,
    },
  });
  const username = 'Aventurera';
  const profilePhotoUrl = 'https://placehold.co/200/png';
  const initialValues = {
    username,
  };

  const changeUSernameSchema = z.object({
    username: z.string().min(1, { message: 'Nombre de usuario requerido' }),
  });

  return (
    <View style={[globalStyles.container, { backgroundColor: 'white' }]}>
      {!changeUsername ? (
        <>
          <Image
            source={{ uri: profilePhotoUrl }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              resizeMode: 'contain',
              marginBottom: 50,
            }}
          />
          <Button
            icon="pencil"
            mode="contained"
            contentStyle={{ height: 50 }}
            labelStyle={{}}
            onPress={() => setChangeUsername(!changeUsername)}
          >
            Cambiar foto de perfil
          </Button>
        </>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
          }}
          validationSchema={toFormikValidationSchema(changeUSernameSchema)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <View style={[globalStyles.wrapper, { marginTop: 50 }]}>
              <TextInput
                mode="outlined"
                label="Nombre de usuario"
                placeholder="Escriba su nuevo nombre de usuario"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                error={errors.username ? true : false}
                style={{
                  backgroundColor: globalStyles.colors.white,
                }}
              />
              <HelperText
                type="error"
                style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'right' }}
                visible={errors.username && touched.username ? true : false}
              >
                Nombre de usuario inválido
              </HelperText>
              <Button
                icon="pencil"
                mode="contained"
                loading={isSubmitting}
                contentStyle={{ height: 50 }}
                labelStyle={{ fontSize: 20 }}
                style={{ marginBottom: 20 }}
                onPress={
                  handleSubmit as unknown as (e: GestureResponderEvent) => void
                }
              >
                Cambiar nombre
              </Button>
              <Button
                icon="cancel"
                mode="outlined"
                loading={isSubmitting}
                contentStyle={{ height: 50 }}
                labelStyle={{ fontSize: 20 }}
                style={{ marginBottom: 20 }}
                onPress={() => setChangeUsername(!changeUsername)}
              >
                Cancelar
              </Button>
            </View>
          )}
        </Formik>
      )}
    </View>
  );
};
