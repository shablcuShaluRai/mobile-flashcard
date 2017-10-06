import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DeckList from './components/DeckList'

export default class App extends React.Component {
  render() {
  return(
    <View>
   <DeckList />
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
