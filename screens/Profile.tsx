import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import globalStyles from '../App.styles.ts';
import TouchButton from '../components/TouchButton.tsx';
import { ProfileScreenProps } from '../types.ts';
import { useUserStore } from '../store/userStore.ts';
import { useGoogleAuth } from '../firebase/google.provider.ts';

export const Profile: React.FC<ProfileScreenProps> = (props) => {
  const { googleSignOut } = useGoogleAuth();
  const { onLogin, onLogout, data } = useUserStore();
  async function onSignOut() {
    googleSignOut();
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  }
  return (
    <View
      style={[globalStyles.container, globalStyles.top, { paddingTop: 12 }]}
    >
      <View style={globalStyles.wrapper}>
        <TouchButton title="Sign Out" onPress={onSignOut} />
        <TouchButton
          title="pruebaborrar"
          onPress={() => {
            onLogout();
          }}
        />
        <TouchButton
          title="prueba"
          onPress={() => {
            onLogin({
              user: {
                picture: 'https://placehold.co/400',
                birthdate: '25/12/1992',
                emailVerify: true,
                coins: 100,
                gems: 50,
                notifications: true,
                status: 'Active',
                suscription: true,
              },
              character: {
                name: 'pedrito',
                description: 'prueba',
                age: '25',
                gender: 'male',
                language: 'ES',
                nationality: 'CO',
              },
              meta: {
                token: 'tokende prueba',
                logged: 'no-authenticated',
              },
            });
          }}
        />
      </View>
    </View>
  );
};
