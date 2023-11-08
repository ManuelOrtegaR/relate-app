import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Welcome } from './screens/Welcome';
import { SignUp } from './screens/SignUp';
import { SignIn } from './screens/SignIn';
import { Rooms } from './screens/Rooms';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Welcome /> */}
      {/* <SignIn /> */}
      <SignUp />
      {/* <Rooms /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
