import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import globalStyles from '../App.styles.ts';
import TouchButton from '../components/TouchButton.tsx';
import { ListsScreenProps } from '../types.ts';

export const Lists: React.FC<ListsScreenProps> = (props) => {
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
