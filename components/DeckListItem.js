import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


export default class DeckListItem extends Component {
  render() {
    const { title, questions, navigation } = this.props
    return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={() => navigation.navigate('DeckView', { title, questions })} >
          <Text>{ title }</Text>
          <Text>{ `${questions.length} cards` }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
})
