import { Formik } from 'formik';
import { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
import { initializeApp } from 'firebase/app';
import { FirebaseAuth, firebaseConfig } from '../firebase/firebase-config.ts';

import globalStyles from '../App.styles.ts';

import { signIn } from '../api/auth/index.ts';
import { Button, TextInput, useTheme, HelperText } from 'react-native-paper';
import { GestureResponderEvent } from 'react-native';
import { Login, useUserStore } from '../store/userStore.ts';
import { useCredentials } from '../firebase/credentials.provider.ts';
import { SignInScreenProps } from '../navigation/types.ts';
import { getMyUser } from '../api/user/index.ts';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(16),
});

const initialValues = {
  email: '',
  password: '',
};

export const SignIn: React.FC<SignInScreenProps> = (props) => {
  const theme = useTheme();
  const store = useUserStore();
  const { signInWithCredentials } = useCredentials();

  //TODO: Si existe character pasa al home si no al onboarding const { setUser } = useContext(UserContext);

  return (
    <View style={[globalStyles.container, { justifyContent: 'space-between' }]}>
      <Image
        source={require('../assets/background-chat-icon.png')}
        style={globalStyles.backgroundImage}
      />
      <Image
        source={require('../assets/logo-relate.png')}
        style={{ marginTop: 100 }}
      />
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          const firebaseResponse = await signInWithCredentials({
            email: values.email,
            password: values.password,
            nickname: '',
          });

          const firebaseUid = firebaseResponse.user.uid;
          const { data: apiResponse } = await signIn({ firebaseUid });
          const payload: Login = {
            user: apiResponse.data,
            meta: {
              token: apiResponse.meta.token,
              logged: 'authenticated',
            },
          };
          store.checkingCredentials();
          store.onLogin(payload);
          const response = await getMyUser();
          if (response.characters[0]) {
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          } else {
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'On Boarding' }],
            });
          }
        }}
        validationSchema={toFormikValidationSchema(signInSchema)}
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
              mode="flat"
              label="Correo electrónico"
              placeholder="Escriba su correo electrónico"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              autoCapitalize="none"
              autoComplete="email"
              value={values.email}
              error={errors.email ? true : false}
              style={{
                backgroundColor: globalStyles.colors.white,
              }}
            />
            <HelperText
              type="error"
              style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'right' }}
              visible={errors.email && touched.email ? true : false}
            >
              Correo inválido
            </HelperText>
            <TextInput
              mode="flat"
              secureTextEntry
              label="Contraseña"
              placeholder="Escriba su contraseña"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password && touched.password ? true : false}
              style={{
                backgroundColor: globalStyles.colors.white,
              }}
            />
            <HelperText
              type="error"
              style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'right' }}
              visible={errors.password && touched.password ? true : false}
            >
              Contraseña inválida
            </HelperText>
            <Button
              icon="login"
              mode="contained"
              loading={isSubmitting}
              contentStyle={{ height: 50 }}
              labelStyle={{ fontSize: 20 }}
              style={{ marginBottom: 20 }}
              onPress={
                handleSubmit as unknown as (e: GestureResponderEvent) => void
              }
            >
              Iniciar sesión
            </Button>
          </View>
        )}
      </Formik>
      <Text
        style={[
          globalStyles.space,
          {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 30,
            textDecorationLine: 'underline',
          },
        ]}
        onPress={() => props.navigation.navigate('Welcome')}
      >
        Regresar al menú
      </Text>
    </View>
  );
};
