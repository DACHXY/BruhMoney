// Pages
import HomePage from '../pages/home';
import SettingPage from '../pages/setting';

// Sytle
import { globalColor, globalStyle } from '../global/style';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator 
        initialRouteName='主頁'
        screenOptions={{
          drawerStyle:{
            backgroundColor: globalColor.mainColor,
          },
          drawerLabelStyle:{
            color: globalColor.inverseColor
          },
          drawerActiveBackgroundColor: globalColor.decorationColor,
          drawerType: "slide"
        }}
        >
      <Drawer.Group
        screenOptions={{
          headerStyle: globalStyle.navBarHeaderStyle,
          headerTitleStyle: globalStyle.navBarHeaderTitleStyle
        }}
      >
        <Drawer.Screen name="主頁" component={HomePage} />
        <Drawer.Screen name="設定" component={SettingPage} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

export default MainDrawer;