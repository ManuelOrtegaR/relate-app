import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile.tsx';
import { Rooms } from './Rooms.tsx';
import { RootStackParamList } from '../types.ts';
import globalStyles from '../App.styles.ts';
import { Icon, useTheme } from 'react-native-paper';
import { Lists } from './Lists.tsx';
import { Chat } from './Chat.tsx';
import { View } from 'react-native';

const Tab = createBottomTabNavigator<RootStackParamList>();
export const Home = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={'Rooms'}
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          color: globalStyles.colors.white,
          marginBottom: 5,
          fontSize: 15,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let name;
          if (route.name === 'Rooms') {
            name = 'comment-text-multiple';
          } else if (route.name === 'Profile') {
            name = 'account-settings';
          } else if (route.name === 'Lists') {
            name = 'book-multiple';
          } else if (route.name === 'Chat') {
            name = 'chat';
          }
          return (
            <Icon source={name} size={32} color={globalStyles.colors.white} />
          );
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.tertiary,
          borderColor: globalStyles.colors.primary,
          height: 60,
        },
        tabBarActiveBackgroundColor: globalStyles.colors.primary,
      })}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Rooms" component={Rooms} />
      <Tab.Screen name="Lists" component={Lists} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};
