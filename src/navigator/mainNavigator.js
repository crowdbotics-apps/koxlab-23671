import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile190289Navigator from '../features/UserProfile190289/navigator';
import Tutorial190288Navigator from '../features/Tutorial190288/navigator';
import NotificationList190260Navigator from '../features/NotificationList190260/navigator';
import Settings190259Navigator from '../features/Settings190259/navigator';
import Settings190251Navigator from '../features/Settings190251/navigator';
import UserProfile190249Navigator from '../features/UserProfile190249/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile190289: { screen: UserProfile190289Navigator },
Tutorial190288: { screen: Tutorial190288Navigator },
NotificationList190260: { screen: NotificationList190260Navigator },
Settings190259: { screen: Settings190259Navigator },
Settings190251: { screen: Settings190251Navigator },
UserProfile190249: { screen: UserProfile190249Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
