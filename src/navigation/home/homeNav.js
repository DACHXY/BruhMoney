import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../pages/home';
import AddRecordPage from '../../pages/addRecord';
import { DrawerName } from '../main';

function HomeNav() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={DrawerName.homePage} component={HomePage} />
            <Stack.Screen name={DrawerName.addRecord} component={AddRecordPage} />
        </Stack.Navigator>
    )
}

export default HomeNav;