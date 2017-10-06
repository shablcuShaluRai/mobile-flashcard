import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class DeckView extends Component {
  render() {
    const title = this.props.navigation.state.params.title
    const questions = this.props.navigation.state.params.questions
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 64}}>{ title }</Text>
        <Text>{ `${questions.length} cards` }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
})
