import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './view/store/index.js';
import { Root } from "native-base";
import { AppRegistry  } from 'react-native'
import AppNavigation from './view/root'
import './view/locale/index'

const store = createStore(allReducers, applyMiddleware (thunk)); // thunk为了实现中间异步返回
export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Provider store= {store}>
          <AppNavigation />
        </Provider>
      </Root>
    );
  }
}
AppRegistry.registerComponent('App', () => App)