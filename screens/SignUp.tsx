import { Formik } from 'formik';
import { Image, Text, View, GestureResponderEvent } from 'react-native';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { FirebaseAuth, firebaseConfig } from '../firebase/firebase-config.ts';

import globalStyles from '../App.styles.ts';
import { SignUpBody, SignUpScreenProps } from '../types.ts';
import { signUp } from '../api/auth/index.ts';
import { Button, HelperText, TextInput, useTheme } from 'react-native-paper';
import { useCredentials } from '../firebase/credentials.provider.ts';

const signUpSchema = z.object({
  nickname: z.string(),
  email: z.string().email(),
  password: z.string().min(6).max(16),
});

const initialValues = {
  nickname: '',
  email: '',
  password: '',
};

export const SignUp: React.FC<SignUpScreenProps> = (props) => {
  const theme = useTheme();
  const { createUserWithCredentials } = useCredentials();

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
          try {
            const response = await createUserWithCredentials({
              email: values.email,
              password: values.password,
              nickname: values.nickname,
            });
            props.navigation.navigate('Sign In');
          } catch (error) {
            // TODO: make alret or error message
            console.log(error);
          }
        }}
        validationSchema={toFormikValidationSchema(signUpSchema)}
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
              label="Nombre de usuario"
              placeholder="Escriba su nombre de usuario"
              onChangeText={handleChange('nickname')}
              onBlur={handleBlur('nickname')}
              autoCapitalize="none"
              autoComplete="nickname"
              value={values.nickname}
              error={errors.nickname ? true : false}
              style={{
                backgroundColor: globalStyles.colors.white,
              }}
            />
            <HelperText
              type="error"
              style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'right' }}
              visible={touched.nickname && errors.nickname ? true : false}
            >
              Nombre de usuario requerido
            </HelperText>
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
              Registrarme
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
