'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Navigator,
  Text
} from 'react-native';

import SecondScene from './SecondScene.js'
import FirstScene from './FirstScene.js'

class FourthScene extends Component {

  componentDidMount() {
    console.log(this.props.navigator.getCurrentRoutes())
  }

  render() {
    return (
      <View style = {{flex :1,backgroundColor : 'yellow',alignItems: 'center',}}>
      	<View>
          <Text style = {{marginTop : 100,fontSize:40,textAlign:'center'}}>FourthScene</Text>
      		<Text 
          style = {styles.textStyle}
          onPress = {() => {
      			this.props.navigator.pop()
      		}}>pop</Text>
          <Text
          style = {styles.textStyle}
          onPress = {() => {
            this.props.navigator.replaceAtIndex({title:SecondScene,component:SecondScene},2)
          }}>replaceAtIndex</Text>
          <Text
          style = {styles.textStyle}
          onPress = {() => {
            this.props.navigator.replacePrevious({title:SecondScene,component:SecondScene})
          }}>replacePrevious</Text>
          <Text
          style = {styles.textStyle}
          onPress = {() =>{
            this.props.navigator.resetTo({title:SecondScene,component:SecondScene})
          }}>resetTo</Text>
          <Text
          style = {styles.textStyle}
          onPress = {() => {
            this.props.navigator.immediatelyResetRouteStack([{title:FirstScene,component:FirstScene},{title:SecondScene,component:SecondScene}])
          }}>immediatelyResetRouteStack</Text>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle :{
    textAlign:'center',
    fontSize:25,
    marginTop:20
  }
});


export default FourthScene;