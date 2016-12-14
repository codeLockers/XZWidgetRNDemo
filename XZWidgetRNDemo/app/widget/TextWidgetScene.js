import React, {Component} from 'react'
import {
    View,
    Navigator,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

class TextWidgetScene extends Component{

    render(){

        return (
            <View style = {{flex:1,backgroundColor:'blue'}}>
                <TouchableOpacity onPress={() =>{
                    this.props.navigator.pop()
                }
                }>
                    <View style = {{width:100,height:100,backgroundColor:'red'}}>
                        <Text></Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
}

export default TextWidgetScene