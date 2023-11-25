import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile.tsx';
import { Rooms } from './Rooms.tsx';
import { RootStackParamList } from '../types.ts';

const Tab = createBottomTabNavigator<RootStackParamList>();
export const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Rooms" component={Rooms} />
    </Tab.Navigator>
  );
};
