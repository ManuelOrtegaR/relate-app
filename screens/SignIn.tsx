import { Formik } from 'formik';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useContext } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';

import globalStyles from '../App.styles.ts';

import TouchButton from '../components/TouchButton.tsx';
import Separator from '../components/Separator.tsx';
import { SignInScreenProps } from '../types.ts';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(16),
});

const initialValues = {
  email: '',
  password: '',
};

export const SignIn: React.FC<SignInScreenProps> = ({ navigation }) => {
  //const { setUser } = useContext(UserContext);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Welcome Back</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          // const user = await signIn(values);
          // setUser(user);
          // navigation.reset({
          //   index: 0,
          //   routes: [{ name: 'Home' }],
          // });
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
          <View style={[globalStyles.wrapper]}>
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
            <TouchButton title="Sign In" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <View style={[globalStyles.wrapper, globalStyles.space]}>
        <Separator text="Sign in with" />
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
      <Text style={globalStyles.space}>Do you want to create an account?</Text>
      <View style={[globalStyles.wrapper]}>
        <TouchButton
          title="Sign Up"
          variant="secondary"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};
