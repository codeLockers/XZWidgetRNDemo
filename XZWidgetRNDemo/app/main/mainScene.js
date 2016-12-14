
import React, {Component} from 'react'
import {
    View,
    Navigator,
    Text,
    StyleSheet,
    ListView,
    TouchableOpacity,
    TabBarIOS
  } from 'react-native'

import TextWidgetScene from '../widget/TextWidgetScene'

class XZWidgetRNDemo extends Component {

constructor(props) {
  super(props);
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows(['Text']),
}
}
_rowClick(){

this.props.navigator.push({

      title:'Text',
      component:TextWidgetScene,
    })

}

static _renderRow(data,SectionID,RowID){

  return (
      <View style={{backgroundColor : 'red',flex: 1}}>

      </View>
  )
}

render() {
  return (
    <ListView
      dataSource = {this.state.dataSource}
      renderRow = {this._renderRow.bind(this)}
    />
  )
}
}

export default XZWidgetRNDemo