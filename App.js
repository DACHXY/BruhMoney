import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

// Color
import { globalStyle, globalColor } from './src/global/style';

// Navigation
import MainDrawer from './src/navigation/main';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={globalColor.mainColor}
      />
      <MainDrawer />
    </NavigationContainer>
  );
}