import React, {Component} from 'react'
import { View, Platform, StatusBar } from 'react-native'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import NewDeck from './components/NewDeck'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Entypo, Ionicons } from '@expo/vector-icons'
import {purple,white} from './utils/colors'
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
 navigationOptions: {
   header: null
 },
 tabBarOptions: {
   activeTintColor: Platform.OS === 'ios' ? purple : white,
   style: {
   height: 56,
     backgroundColor: Platform.OS === 'ios' ? white : purple,
     shadowColor: 'rgba(0, 0, 0, 0.24)',
   shadowOffset: {
       width: 0,
     height: 3
     },
     shadowRadius: 6,
     shadowOpacity: 1
   }
 }
})

function FlashcardStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <View style={{height:20}}/>
       <FlashcardStatusBar backgroundColor={purple} barStyle="light-content" />
       <Tabs/>
    </View>
    );
  }
}
