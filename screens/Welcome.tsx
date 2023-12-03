import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import globalStyles from '../App.styles.ts';
import { WelcomeScreenProps } from '../types.ts';
import TouchButtonWithIcon from '../components/TouchButtonWithIcon.tsx';
import { ActivityIndicator, Button } from 'react-native-paper';
import {
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} from 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google.js';
import { FirebaseAuth } from '../firebase/firebase-config.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

export const Welcome: React.FC<WelcomeScreenProps> = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '503380554468-m5051l8ka5gt6qdq1taml9c95kh9nsdi.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(FirebaseAuth, credential);
    }
  }, [response]);

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem('@user');
      console.log(userJSON);
      const userData = userJSON ? JSON.parse(userJSON) : null;
      setUserInfo(userData);
    } catch (error) {
      console.log(error, 'Error gettin local user');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocalUser();
    const unsub = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (user) {
        await AsyncStorage.setItem('@user', JSON.stringify(user));
        setUserInfo(user);
        console.log(JSON.stringify(user, null, 2));
      } else {
        console.log('user not authenticated');
      }
    });
    return () => unsub();
  }, []);

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
                onPress={() => {
                  promptAsync();
                }}
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
