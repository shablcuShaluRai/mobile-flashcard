import React, {Component} from 'React'
import {View, Text, FlatList} from 'react-native'
import DeckListItem from './DeckListItem'
import { getDecks }  from '../utils/helpers'

export default class DeckList extends Component{

  renderItem = ({ item }) =>{
return <DeckListItem  {...item } navigation={this.props.navigation}/>
  }

  render(){
    const decksData = getDecks()
    return (
      <View>
      <FlatList
      data ={decksData}
      renderItem = {this.renderItem}
      keyExtractor  ={(item , index ) => index}
      />


      </View>
    )
  }
}
