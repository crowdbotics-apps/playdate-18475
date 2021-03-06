import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings72322Navigator from '../features/Settings72322/navigator';
import UserProfile72315Navigator from '../features/UserProfile72315/navigator';
import Settings72314Navigator from '../features/Settings72314/navigator';
import Settings72312Navigator from '../features/Settings72312/navigator';
import SignIn272310Navigator from '../features/SignIn272310/navigator';
import Settings72308Navigator from '../features/Settings72308/navigator';
import Settings72300Navigator from '../features/Settings72300/navigator';
import Settings72298Navigator from '../features/Settings72298/navigator';
import Settings72269Navigator from '../features/Settings72269/navigator';
import UserProfile72262Navigator from '../features/UserProfile72262/navigator';
import Settings72259Navigator from '../features/Settings72259/navigator';
import SignIn272257Navigator from '../features/SignIn272257/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings72322: { screen: Settings72322Navigator },
UserProfile72315: { screen: UserProfile72315Navigator },
Settings72314: { screen: Settings72314Navigator },
Settings72312: { screen: Settings72312Navigator },
SignIn272310: { screen: SignIn272310Navigator },
Settings72308: { screen: Settings72308Navigator },
Settings72300: { screen: Settings72300Navigator },
Settings72298: { screen: Settings72298Navigator },
Settings72269: { screen: Settings72269Navigator },
UserProfile72262: { screen: UserProfile72262Navigator },
Settings72259: { screen: Settings72259Navigator },
SignIn272257: { screen: SignIn272257Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
