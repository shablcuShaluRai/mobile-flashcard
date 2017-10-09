import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

 class DeckView extends Component {
  render() {
    const navigation = this.props.navigation
    const title = navigation.state.params.title
      const questions = this.props.decks[title]['questions']
      console.log("deckview", questions);

        return (
      <View style={styles.container}>
        <Text style={{fontSize: 64}}>{ title }</Text>
        <Text>{ `${questions.length} cards` }</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NewQuizzCard', { title })} >
          <Text>Add Card</Text>
        </TouchableOpacity>
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

function mapStateToProps({ decks }){
  return { decks }
}

export default connect(mapStateToProps, null)(DeckView)
