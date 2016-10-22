'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Navigator,
	TouchableOpacity,
	Text
} from 'react-native';

import ThirdScene from './ThirdScene'
import SecondScene from './SecondScene.js'

class FirstScene extends Component {

	render() {
		return (
			<View style = {{backgroundColor : 'red',flex: 1,alignItems: 'center',}}>
				<View>
					<Text style = {{marginTop : 100,fontSize:40}}>FirstScene</Text>
					<Text 
					style   = {styles.textStyle}
					onPress = {() => {
						this.props.navigator.push({
							title:'SecondScene',
							component:SecondScene
						})
					}}>push</Text>
					<Text 
					style = {styles.textStyle}
					onPress = {() => {
						this.props.navigator.jumpForward()
					}}
					>jumpForward</Text>
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


export default FirstScene;