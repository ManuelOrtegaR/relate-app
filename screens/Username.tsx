import React from 'react';
import { GestureResponderEvent, View } from 'react-native';
import {
  Button,
  HelperText,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import globalStyles from '../App.styles.ts';
import { UsernameScreenProps } from '../types.ts';
import { Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';

export const Username: React.FC<UsernameScreenProps> = (props) => {
  const [changeUsername, setChangeUsername] = React.useState(false);
  const theme = useTheme();
  props.navigation.setOptions({
    headerTitle: `Nombre de usuario`,
    headerTintColor: globalStyles.colors.white,
    headerTitleStyle: { color: globalStyles.colors.white },
    headerStyle: {
      backgroundColor: theme.colors.tertiary,
    },
  });
  const username = 'Aventurera';
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
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Nombre de usuario:
          </Text>
          <Text style={{ fontSize: 20, marginBottom: 50 }}>{username}</Text>
          <Button
            icon="pencil"
            mode="contained"
            contentStyle={{ height: 50 }}
            labelStyle={{}}
            onPress={() => setChangeUsername(!changeUsername)}
          >
            Cambiar nombre de usuario
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
