import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Navigator
} from 'react-native';

import FirstScene from './FirstScene.js'
import SecondScene from './SecondScene.js'

export default class XZWidgetRNDemo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'firstScene'
    }
  }

  _renderContent(selectedTab) {



    if (selectedTab === 'firstScene') {
      // console.log(selectedTab)
      return (

        <Navigator
            initialRoute= {{component: FirstScene,title: 'FirstScene'}}
            configureScene = {() => Navigator.SceneConfigs.FloatFromRight}
            onDidFocus = {(route) => {
              console.log('onDidFocus -----'+route.title)
            }}
            onWillFocus = {(route) => {
              console.log('onWillFocus -----'+route.title)
            }}
            renderScene = {(route, navigator) => {
              console.log('renderScene')
              return <route.component {...route} navigator={navigator}/>
            }
        }/>

      )
    } else if (selectedTab === 'secondScene') {
      // console.log(selectedTab)
      return ( 

        <View/>
      )
    }
  }

  render() {
    return (

      <TabBarIOS
        unselectedTintColor = "yellow"
        tintColor           = "red"
        barTintColor        = "darkslateblue"
        translucent         = {false}>
        <TabBarIOS.Item
          icon         = {require('../image/tabbar_compass_normal@3x.png')}
          selectedIcon = {require('../image/tabbar_compass_select@3x.png')}
          title        = 'firstScene'
          renderAsOriginal
          selected     = {this.state.selectedTab === 'firstScene'}
          onPress      = {() => {
            this.setState({
              selectedTab:'firstScene' ,
            })
          }}>
          {this._renderContent('firstScene')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon = 'history'
          selected  = {this.state.selectedTab === 'secondScene'}
          badge = '5'
          onPress  = {() => {
             this.setState({
              selectedTab:'secondScene' ,
            })
          }}>
          {this._renderContent('secondScene')}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}


AppRegistry.registerComponent('XZWidgetRNDemo', () => XZWidgetRNDemo);