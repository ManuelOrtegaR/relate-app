import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

import * as SplashScreen from 'expo-splash-screen';
import globalStyles from './App.styles.ts';
import { appTheme } from './appTheme.ts';

import { Welcome } from './screens/Welcome';
import { SignUp } from './screens/SignUp';
import { SignIn } from './screens/SignIn';
import { Rooms } from './screens/Rooms';
import { Profile } from './screens/Profile';
import { RootStackParamList } from './types';
import { Home } from './screens/Home';
import { OnBoarding } from './screens/OnBoarding.tsx';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: appTheme.light,
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: 'fade_from_bottom' }}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Sign In"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="On Boarding"
            component={OnBoarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Rooms" component={Rooms} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}
