import React from 'react';
import { View } from 'react-native';
import globalStyles from '../App.styles.ts';
import TouchButton from '../components/TouchButton.tsx';
import { ProfileScreenProps } from '../types.ts';
import { useUserStore } from '../store/userStore.ts';
import { useGoogleAuth } from '../firebase/google.provider.ts';
import { Button, Divider, Icon, Text } from 'react-native-paper';

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
    <View style={[globalStyles.container, { backgroundColor: 'white' }]}>
      <View style={{ width: '90%' }}>
        <Button
          icon="chevron-right"
          mode="text"
          onPress={() => console.log('Pressed')}
          contentStyle={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}
          labelStyle={{ fontWeight: 'bold', fontSize: 17 }}
          style={{ marginBottom: 10 }}
        >
          Planes y suscripciones
        </Button>
        <Divider style={{ marginBottom: 10 }} />
        <View style={{ marginLeft: 16, marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 10 }}>
            Mi Perfil
          </Text>
          <Button
            icon="chevron-right"
            mode="text"
            onPress={() => props.navigation.navigate('Username')}
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            labelStyle={{ fontSize: 17 }}
          >
            Nombre de usuario
          </Button>
          <Button
            icon="chevron-right"
            mode="text"
            onPress={() => props.navigation.navigate('ProfilePhoto')}
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            labelStyle={{ fontSize: 17 }}
          >
            Foto de perfil
          </Button>
          <Button
            icon="chevron-right"
            mode="text"
            onPress={() => props.navigation.navigate('Characters')}
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            labelStyle={{ fontSize: 17 }}
          >
            Avatares
          </Button>
        </View>
        <Divider style={{ marginBottom: 10 }} />
        <Button
          icon="chevron-right"
          mode="text"
          onPress={() => props.navigation.navigate('Account')}
          contentStyle={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}
          labelStyle={{ fontWeight: 'bold', fontSize: 17 }}
          style={{ marginBottom: 10 }}
        >
          Mi cuenta
        </Button>
        <Divider style={{ marginBottom: 10 }} />
        <Button
          icon="chevron-right"
          mode="text"
          onPress={() => console.log('Pressed')}
          contentStyle={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}
          labelStyle={{ fontWeight: 'bold', fontSize: 17 }}
          style={{ marginBottom: 10 }}
        >
          Configurar notificaciones
        </Button>
        <Divider style={{ marginBottom: 10 }} />
        <View style={{ marginLeft: 16, marginBottom: 150 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 10 }}>
            Legal
          </Text>
          <Button
            icon="chevron-right"
            mode="text"
            onPress={() => console.log('Pressed')}
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            labelStyle={{ fontSize: 17 }}
          >
            Ajustes de privacidad
          </Button>
          <Button
            icon="chevron-right"
            mode="text"
            onPress={() => console.log('Pressed')}
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            labelStyle={{ fontSize: 17 }}
          >
            Política de cookies
          </Button>
          <Button
            icon="chevron-right"
            mode="text"
            onPress={() => console.log('Pressed')}
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            labelStyle={{ fontSize: 17 }}
          >
            Política de privacidad
          </Button>
          <Button
            icon="chevron-right"
            mode="text"
            onPress={() => console.log('Pressed')}
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            labelStyle={{ fontSize: 17 }}
          >
            Términos y condiciones
          </Button>
        </View>
      </View>
    </View>
  );
};

{
  /* <TouchButton title="Sign Out" onPress={onSignOut} />
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
        /> */
}
