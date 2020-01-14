import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { routes, firstPage} from './routers/index'

const Root = createAppContainer(
  createStackNavigator(
    {
      ...routes
    },
    {
      initialRouteName: firstPage,
      headerMode: "none"
    }
  )
)
export default Root;