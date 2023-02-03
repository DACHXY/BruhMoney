// Pages
import HomePage from '../pages/home';
import SettingPage from '../pages/setting';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="主頁" component={HomePage} />
      <Drawer.Screen name="設定" component={SettingPage} />
    </Drawer.Navigator>
  );
}

export default MainDrawer;