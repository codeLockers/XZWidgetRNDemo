'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import FourthScene from './FourthScene.js'

class ThirdScene extends Component {

  render() {
    return (
      <View style = {{backgroundColor : 'green',flex: 1,alignItems: 'center',}}>
      	<View>
          <Text style = {{marginTop : 100,fontSize:40}}>ThirdScene</Text>
          <Text 
          style   = {styles.textStyle}
          onPress = {() => {
            this.props.navigator.pop()
          }}>pop</Text>
          <Text
          style = {styles.textStyle}
          onPress = {() =>{
            this.props.navigator.push({
              title:'FourthScene',
              component:FourthScene
            })
          }}>push</Text>
          <Text 
          style = {styles.textStyle}
          onPress = {() => {
            this.props.navigator.popToRoute(this.props.navigator.getCurrentRoutes()[0])
          }}>popToRoute</Text>
          <Text
          style = {styles.textStyle}
          onPress = {() => {
            this.props.navigator.jumpTo(this.props.navigator.getCurrentRoutes()[0])
          }}
          >jumpTo</Text>
          <Text
          style = {styles.textStyle}
          onPress = {() => {
            this.props.navigator.popToTop()
          }}>popToTop</Text>
          <Text
          style = {styles.textStyle}
          onPress = {() =>{
            console.log('replace')
            this.props.navigator.replace({
              title:'FourthScene',
              component:FourthScene
            })
          }}>replace</Text>
          <Text 
          style = {styles.textStyle}
          onPress = {() => {
            console.log(this.props.navigator.getCurrentRoutes())
          }}>getCurrentRoutes</Text>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    textStyle : {
      textAlign:'center',
      fontSize:25,
      marginTop:20
  }
});


export default ThirdScene;