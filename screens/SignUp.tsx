import { Formik } from 'formik';
import { Image, Text, TextInput, View } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config.ts';

import globalStyles from '../App.styles.ts';
import TouchButton from '../components/TouchButton.tsx';
import Separator from '../components/Separator.tsx';
import { SignUpBody, SignUpScreenProps } from '../types.ts';
import { signUp } from '../api/auth/index.ts';

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
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Welcome</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const firebaseResponse = await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password,
            );

            const body: SignUpBody = {
              nickname: values.nickname,
              email: values.email,
              birthdate: '28/06/1992',
              firebaseUid: firebaseResponse.user.uid,
            };
            await signUp(body);
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
          <View style={[globalStyles.wrapper]}>
            <TextInput
              style={[
                globalStyles.input,
                globalStyles.space,
                touched.nickname && errors.nickname && globalStyles.inputError,
              ]}
              autoCapitalize="none"
              autoComplete="nickname"
              placeholder="Username"
              onChangeText={handleChange('nickname')}
              onBlur={handleBlur('nickname')}
              value={values.nickname}
            />
            <TextInput
              style={[
                globalStyles.input,
                globalStyles.space,
                touched.email && errors.email && globalStyles.inputError,
              ]}
              autoCapitalize="none"
              autoComplete="email"
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              style={[
                globalStyles.input,
                globalStyles.space,
                touched.password && errors.password && globalStyles.inputError,
              ]}
              secureTextEntry
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <TouchButton title="Sign Up" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <View style={[globalStyles.wrapper, globalStyles.space]}>
        <Separator text="Sign up with" />
      </View>
      <View style={[globalStyles.space, { flexDirection: 'row' }]}>
        <AntDesign
          style={{ marginRight: 20 }}
          name="facebook-square"
          size={32}
          color="dodgerblue"
        />
        <AntDesign
          style={{ marginRight: 20 }}
          name="google"
          size={32}
          color="red"
        />
        <FontAwesome5 name="fingerprint" size={32} color="black" />
      </View>
      <View style={[globalStyles.wrapper, globalStyles.space]}>
        <Separator text="or" />
      </View>
      <Text style={globalStyles.space}>Do you already have an account?</Text>
      <View style={[globalStyles.wrapper]}>
        <TouchButton
          title="Sign In"
          variant="secondary"
          onPress={() => props.navigation.navigate('Sign In')}
        />
      </View>
    </View>
  );
};
