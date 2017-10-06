import React, {Component} from 'react'
import { View } from 'react-native'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import NewDeck from './components/NewDeck'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Entypo, Ionicons } from '@expo/vector-icons'
import {black,white} from './utils/colors'
import {Constants} from 'expo'

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView
  }
})

const Tabs = TabNavigator({
  Decks:{
    screen:Stack,
    navigationOptions:{
      tabBarLabel:'Decks',
      tabBarIcon:({ tintColor }) => <Ionicons name='ios-list' size={30} color={tintColor} />
    }
  },
  NewDeck:{
    screen:NewDeck,
    navigationOptions:{
      tabBarLabel:'New Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: black
  }
}

)

export default class App extends Component {
  render() {
    return (
       <Tabs/>

    );
  }
}
