import { useState, useEffect } from 'react'
import * as Google from 'expo-auth-session/providers/google.js';
import { FirebaseAuth } from '../firebase/firebase-config.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { clearSession, setGoogleUser, setSession, setUser } from '../api/session.ts';
import { SignUpBody, UserInfo } from '../types.ts';
import { signIn, signUp } from '../api/auth/index.ts';
import { Login, useUserStore } from '../store/userStore.ts';

export const useGoogleAuth = () => {
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const store = useUserStore()
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
      const userJSON = await AsyncStorage.getItem('@googleUser');
      const userData: UserInfo = userJSON ? JSON.parse(userJSON) : null;
      setUserInfo(userData as any);
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
        await AsyncStorage.setItem('@googleUser', JSON.stringify(user));
        setUserInfo(user as any)

        try {
          const body: SignUpBody = {
            nickname: user.displayName!,
            email: user.email!,
            birthdate: '28/06/1992',
            firebaseUid: user.uid,
          };
          await signUp(body);
        } catch (error) {
          console.log(error);
        } finally {
          const { data: apiResponse } = await signIn({ firebaseUid: user.uid });
          await setSession(apiResponse.meta.token)
          const payload: Login = {
            user: apiResponse.data,
            meta: {
              token: apiResponse.meta.token,
              logged: 'authenticated',
            },
          };
          store.checkingCredentials();
          store.onLogin(payload);
          setLogged(true)
        }
      } else {
        console.log('user not authenticated');
      }
    });
    return () => unsub();
  }, []);

  const googleSignOut = async () => {
    await signOut(FirebaseAuth);
    setUserInfo(undefined);
    setLogged(false)
    await clearSession()
  }

  return { promptAsync, loading, userInfo, googleSignOut, logged }
}
