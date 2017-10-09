import React, {Component} from 'React'
import {View, Text, FlatList} from 'react-native'
import DeckListItem from './DeckListItem'
import { getDecksData }  from '../utils/decks'
import {connect} from 'react-redux'
import { getDecks } from '../actions'

 class DeckList extends Component{



  componentDidMount = () => {
    this.props.getDecks();
    console.log(this.props.getDecks());
  }


  renderItem = ({ item }) =>{
return <DeckListItem  {...item } navigation={this.props.navigation}/>
  }

  render(){
    const decks = this.props.decks
    const decksData = Object.keys(decks).map(key => decks[key])
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

function mapStateToProps({ decks})
{
  return { decks }
}

function mapDispatchToProps(dispatch){
  return {
    getDecks: () => dispatch(getDecks())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckList)
