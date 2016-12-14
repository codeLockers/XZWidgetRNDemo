'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import ThirdScene from './ThirdScene.js'

class SecondScene extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	containerViewBackgroundColor:'blue'
	  };
	}

	render() {
		return (
			<View style = {{backgroundColor :this.state.containerViewBackgroundColor,flex: 1,alignItems: 'center'}}
				  >
				<Text style = {{fontSize:40,marginTop:100}}>SecondScene</Text>
				<Text 
				style = {styles.textStyle}
				onPress = {() => {
					this.props.navigator.pop()
				}}>pop</Text>
				<Text 
				style = {styles.textStyle}
				onPress = {() =>{
					this.props.navigator.push({
						title:'ThirdScene',
						component:ThirdScene
					})
				}}>push
				</Text>
				<Text 
				style = {styles.textStyle}
				onPress = {() => {
					console.log(this.props.navigator.getCurrentRoutes())
				}}>getCurrentRoutes</Text>
				<Text 
				style = {styles.textStyle}
				onPress = {() => {
					this.props.navigator.jumpBack()
				}}
				>jumpBack</Text>
				<Text
				style = {styles.textStyle}
				onPress = {() => {
					console.log('changeColor')
					this.setState({
					  containerViewBackgroundColor: 'red',
					});
				}}>changeBackgroundColor</Text>
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


export default SecondScene;