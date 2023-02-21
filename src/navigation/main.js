import { TouchableWithoutFeedback } from 'react-native';

// Pages
import HomePage from '../pages/home';
import SettingPage from '../pages/setting';

// Icon
import Icon from 'react-native-vector-icons/Feather';

// Sytle
import { globalColor, globalStyle } from '../global/style';

import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export const DrawerName = {
  homePage: "主頁",
  setting : "設定"
}

function MainDrawer() {
  function MenuButtonOnPress({navigation}){
    navigation.openDrawer()
  }

  return (
    <Drawer.Navigator 
        initialRouteName={DrawerName.homePage}
        screenOptions={({navigation}) => ({
          drawerStyle:{
            backgroundColor: globalColor.mainColor,
          },
          drawerLabelStyle:{
            color: globalColor.inverseColor
          },
          drawerActiveBackgroundColor: globalColor.decorationColor,
          drawerType: "slide",
          headerStyle: globalStyle.navBarHeaderStyle,
          headerTitleStyle: globalStyle.navBarHeaderTitleStyle,
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => MenuButtonOnPress({navigation})}>
              <Icon style={[{paddingLeft: 20}]} name='menu' size={30} color={globalColor.inverseColor}></Icon>
            </TouchableWithoutFeedback>
          )
        })}>
      <Drawer.Screen name={DrawerName.homePage} component={HomePage} />
      <Drawer.Screen name={DrawerName.setting} component={SettingPage} />
    </Drawer.Navigator>
  );
}

export default MainDrawer;