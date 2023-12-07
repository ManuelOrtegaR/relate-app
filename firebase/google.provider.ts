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

export const useGoogleAuth = () => {
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

  const googleSignOut = async () => {
    await signOut(FirebaseAuth);
    await AsyncStorage.removeItem('@user');
  }

  return { promptAsync, loading, userInfo, googleSignOut }
}
