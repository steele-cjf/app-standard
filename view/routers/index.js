
import Home from "../page/home";
import Login from "../page/login";

// components
import PickerCustomHeaderStyle from '../components/custom_picker';
import Thumbnail from '../components/thumbnail';
import Toast from '../components/toast';
import Header from '../components/header';
import Footer from '../components/footer';
import MapScreen from '../components/map';

export const routes = {
  Home: { screen: Home },
  Login: { screen: Login },
  Header: { screen: Header },

  // components(组件库)
  PickerCustomHeaderStyle: { screen: PickerCustomHeaderStyle},
  Thumbnail: { screen: Thumbnail },
  Toast: { screen: Toast },
  Footer: { screen: Footer },
  Map: { screen: MapScreen }
}

export const routeKeys = Object.keys(routes)
export const firstPage = 'Home'