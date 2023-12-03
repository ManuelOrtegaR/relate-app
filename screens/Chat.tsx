import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import globalStyles from '../App.styles.ts';
import TouchButton from '../components/TouchButton.tsx';
import { ChatScreenProps } from '../types.ts';

export const Chat: React.FC<ChatScreenProps> = (props) => {
  async function onSignOut() {
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  }

  return (
    <View
      style={[globalStyles.container, globalStyles.top, { paddingTop: 12 }]}
    >
      <View style={globalStyles.wrapper}>
        <TouchButton title="Sign Out" onPress={onSignOut} />
      </View>
    </View>
  );
};
