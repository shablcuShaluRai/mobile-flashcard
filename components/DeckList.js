import React, {Component} from 'React'
import {View, Text, FlatList} from 'react-native'
import DeckListItem from './DeckListItem'
import { getDecksData }  from '../utils/decks'

export default class DeckList extends Component{

  state = {
    decks: []
  }

  componentDidMount = () => {
    this.loadDecks();
    console.log(this.loadDecks());
  }

  loadDecks = async () => {
    const decks = await getDecksData()
    this.setState({ decks })
    console.log(this.state.decks);

  }


  renderItem = ({ item }) =>{
return <DeckListItem  {...item } navigation={this.props.navigation}/>
  }

  render(){

    return (
      <View>
      <FlatList
      data ={this.state.decks}
      renderItem = {this.renderItem}
      keyExtractor  ={(item , index ) => index}
      />
      </View>
    )
  }
}
