import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

// Navigation
import MainDrawer from './src/navigation/main';

export default function App() {
  return (
    <NavigationContainer>
      <MainDrawer/>
    </NavigationContainer>
  );
}