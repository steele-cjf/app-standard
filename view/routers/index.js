
import Home from "../page/home";
import Login from "../page/login";

// components
import CustomPicker from '../components/custom_picker';
import Thumbnail from '../components/thumbnail';
import Toast from '../components/toast';
import Header from '../components/header';
import Footer from '../components/footer';
import BaiduMap from '../components/baiduMap';
import GoogleMap from '../components/googleMap';
import Segments from '../components/segments'
import Grid from '../components/grid'

// 業務路由
const pages = {
  Home: { screen: Home },
  Login: { screen: Login },
  Header: { screen: Header },
}

// 組件路由
const components = {
  CustomPicker: { screen: CustomPicker},
  Thumbnail: { screen: Thumbnail },
  Toast: { screen: Toast },
  Footer: { screen: Footer },
  BaiduMap: { screen: BaiduMap },
  GoogleMap: { screen: GoogleMap },
  Segments: { screen: Segments},
  Grid: { screen: Grid }
}
export const routes = {
  ...pages,
  ...components
}

export const pagesRoute = Object.keys(pages)
export const componentsRoute = Object.keys(components)
