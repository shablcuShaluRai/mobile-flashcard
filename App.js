import React, {Component} from 'react'
import { View } from 'react-native'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import { StackNavigator } from 'react-navigation'

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView
  }
})

export default class App extends Component {
  render() {
    return (
      <Stack />
    );
  }
}
