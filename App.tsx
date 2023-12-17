import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { appTheme } from './appTheme.ts';
import { AppStack } from './navigation/AppStack.tsx';
import { TanStackProvider } from './plugins/TanStackProvider.tsx';

export default function App() {
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: appTheme.light,
  };

  return (
    <PaperProvider theme={theme}>
      <TanStackProvider>
        <NavigationContainer>
          <AppStack />
          <StatusBar style="auto" />
        </NavigationContainer>
      </TanStackProvider>
    </PaperProvider>
  );
}
