import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import MainScene from './mainScene'

export default class XZWidgetRNDemo extends Component {
  render() {
    return (
        <Navigator
        //   <MainScene/>
        initialRoute = {{title:'React-Native控件学习',component:MainScene}}
        renderScene = {(route,navigator) => {
            return <route.component {...route} navigator={navigator}/>
        }}
        />
    )
  }
}

AppRegistry.registerComponent('XZWidgetRNDemo', () => XZWidgetRNDemo);