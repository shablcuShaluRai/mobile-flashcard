import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { white, gray } from '../utils/colors'


export default class DeckListItem extends Component {
  render() {
    const { title, questions, navigation } = this.props
    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          style = {styles.text}
          onPress={() => navigation.navigate('DeckView', { title })} >
          <Text style={styles.deckTitle}>{ title }</Text>
          <Text style={styles.numOfCards}>{ `${questions.length} cards` }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: gray
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckTitle: {
    fontWeight: 'bold',
    fontSize: 24
  },
  numOfCards: {
      fontSize: 18,
      fontWeight: 'bold',
      color: gray
    }
})
