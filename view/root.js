import { Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { routes } from './routers/index'
import SideBarScreen from "./page/sideBar";

const drawerWidth = Dimensions.get('window').width * 0.65 // 占屏保的75%
const Drawer = createDrawerNavigator(
  {
    ...routes
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "red",
      inactiveBackgroundColor: 'red'
    },
    drawerWidth: drawerWidth, //抽屉的宽度或返回的功能。
    contentComponent: SideBarScreen
  }
)
const stack = createStackNavigator(
  {
    Drawer
  },
  {
    initialRouteName: 'Drawer',
    headerMode: "none"
  }
)
const Root = createAppContainer(stack)
export default Root;