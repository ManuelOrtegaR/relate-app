import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { Account } from '../screens/Account';
import { Character } from '../screens/Character';
import { Characters } from '../screens/Characters';
import { CreateCharacter } from '../screens/CreateCharacter';
import { Home } from '../screens/Home';
import { Nickname } from '../screens/Nickname';
import { OnBoarding } from '../screens/OnBoarding';
import { Profile } from '../screens/Profile';
import { ProfilePhoto } from '../screens/ProfilePhoto';
import { Room } from '../screens/Room';
import { Rooms } from '../screens/Rooms';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Username } from '../screens/Username';
import { Welcome } from '../screens/Welcome';
import { Avatar } from '../screens/Avatar';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStack = () => {
  return (
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
      <Stack.Screen
        name="Nickname"
        component={Nickname}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Avatar"
        component={Avatar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Rooms" component={Rooms} />
      <Stack.Screen name="Room" component={Room} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Username" component={Username} />
      <Stack.Screen name="ProfilePhoto" component={ProfilePhoto} />
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="Character" component={Character} />
      <Stack.Screen name="CreateCharacter" component={CreateCharacter} />
    </Stack.Navigator>
  );
};
