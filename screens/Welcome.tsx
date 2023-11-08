import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../App.styles.ts';
import TouchButton from '../components/TouchButton.tsx';
import Separator from '../components/Separator.tsx';

export const Welcome = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Welcome to Relate</Text>
      <Text style={globalStyles.space}>Do you want to create an account?</Text>
      <View style={[globalStyles.wrapper]}>
        <TouchButton
          title="Sign Up"
          //onPress={() => navigation.navigate('Sign Up')}
        />
      </View>
      <View style={[globalStyles.wrapper, globalStyles.space]}>
        <Separator text="or" />
      </View>
      <Text style={globalStyles.space}>Do you already have an account?</Text>
      <View style={[globalStyles.wrapper]}>
        <TouchButton
          title="Sign In"
          variant="secondary"
          //onPress={() => navigation.navigate('Sign In')}
        />
      </View>
    </View>
  );
};
