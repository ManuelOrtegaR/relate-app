import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import globalStyles from '../App.styles.ts';
import { ActivityIndicator, Button } from 'react-native-paper';
import * as WebBrowser from 'expo-web-browser';
import { useGoogleAuth } from '../firebase/google.provider.ts';
import { WelcomeScreenProps } from '../navigation/types.ts';
import { getMyUser } from '../api/user/index.ts';

WebBrowser.maybeCompleteAuthSession();

export const Welcome: React.FC<WelcomeScreenProps> = (props) => {
  const { promptAsync, loading, logged } = useGoogleAuth();
  const onGoogleSignin = async () => {
    promptAsync();
  };

  useEffect(() => {
    if (logged) {
      getMyUser().then((res) => {
        if (res.characters[0]) {
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
      });
    }
  }, [logged]);

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
      {loading ? (
        <ActivityIndicator
          animating={true}
          size="large"
          color={globalStyles.colors.white}
          style={{ marginBottom: 400 }}
        />
      ) : (
        <>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: '90%',
            }}
          >
            <View
              style={[
                globalStyles.wrapper,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 100,
                  marginBottom: 20,
                },
              ]}
            >
              <Button
                icon="login"
                mode="contained"
                contentStyle={{ height: 50 }}
                labelStyle={{}}
                onPress={() => props.navigation.navigate('Sign In')}
              >
                Iniciar sesión
              </Button>
              <Button
                icon="pencil"
                mode="outlined"
                contentStyle={{ height: 50 }}
                labelStyle={{
                  color: globalStyles.colors.white,
                }}
                style={{ borderColor: globalStyles.colors.white }}
                onPress={() => props.navigation.navigate('Sign Up')}
              >
                Registrarme
              </Button>
            </View>
            <Text style={[{ color: 'white', marginBottom: 30 }]}>
              O también puedes
            </Text>
            <View style={[globalStyles.wrapper]}>
              <Button
                icon="facebook"
                mode="contained"
                theme={{ colors: { primary: globalStyles.colors.info_light } }}
                contentStyle={{
                  height: 50,
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                }}
                labelStyle={{ fontSize: 20 }}
                style={{ marginBottom: 20 }}
                onPress={() => {}}
              >
                Continuar con Facebook
              </Button>
              <Button
                icon={() => (
                  <Image
                    source={require('../assets/google-logo.jpg')}
                    style={{ width: 20, height: 20 }}
                  />
                )}
                mode="contained"
                theme={{ colors: { primary: globalStyles.colors.white } }}
                contentStyle={{
                  height: 50,
                  justifyContent: 'flex-start',
                  marginLeft: 20,
                }}
                labelStyle={{
                  fontSize: 20,
                  color: globalStyles.colors.gray,
                }}
                onPress={onGoogleSignin}
              >
                Continuar con Google
              </Button>
            </View>
          </View>
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
            onPress={() => props.navigation.navigate('On Boarding')}
          >
            Omitir por ahora
          </Text>
        </>
      )}
    </View>
  );
};
