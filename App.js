import React from 'react';
import { AppRegistry  } from 'react-native'
import Root from './view/root'
import './view/locale/index'
export default class App extends React.Component {
  render() {
    return (
      <Root />
    );
  }
}
AppRegistry.registerComponent('App', () => App)