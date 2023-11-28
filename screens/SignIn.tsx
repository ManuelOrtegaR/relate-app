import { Formik } from 'formik';
import { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config.ts';

import globalStyles from '../App.styles.ts';

import { SignInScreenProps } from '../types.ts';
import { signIn } from '../api/auth/index.ts';
import { Button, TextInput, useTheme, HelperText } from 'react-native-paper';
import { GestureResponderEvent } from 'react-native';

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
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  //const { setUser } = useContext(UserContext);
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
          const firebaseResponse = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password,
          );

          const firebaseUid = firebaseResponse.user.uid;
          const { data: apiResponse } = await signIn({ firebaseUid });
          console.log(apiResponse);
          //setUser(user);
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
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
                backgroundColor: theme.colors.surface,
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
                backgroundColor: theme.colors.surface,
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
