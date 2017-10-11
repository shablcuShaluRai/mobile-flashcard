import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, black, purple } from '../utils/colors'

 class DeckView extends Component {
   render() {
     const navigation = this.props.navigation
     const title = navigation.state.params.title
     const decks = this.props.decks[title]
     const questions = decks['questions']
       return (
         <View style={styles.container}>
         <Text style={styles.title}>{ title }</Text>
         <Text style = { styles.cardsNum}>{ `${questions.length} cards` }</Text>
         <TouchableOpacity
           style={styles.addCardButton}
           onPress={() => navigation.navigate('NewQuizzCard', { title })} >
           <Text style ={ styles.btnText}>Add Card</Text>
         </TouchableOpacity>
         <TouchableOpacity
         style={styles.startQuizButton}
         onPress = {() => navigation.navigate('Quiz', {decks})}>
           <Text style ={styles.btnText}> Start Quiz </Text>
         </TouchableOpacity>
         </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding:10,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
},
title:{
  fontSize:45,
  fontWeight:'bold'
},
cardsNum: {
    fontSize: 18,
    fontWeight: 'bold',
    color: gray
  },
  addCardButton: {
     marginTop: 60,
     marginBottom: 20,
     paddingVertical: 20,
     paddingHorizontal: 60,
     borderRadius: 2,
     borderWidth: 1,
     backgroundColor: purple,
     height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startQuizButton: {
    paddingVertical: 20,
    paddingHorizontal: 53,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    height: 45,
   justifyContent: 'center',
   alignItems: 'center',
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },

})



function mapStateToProps({ decks }){
  return { decks }
}

export default connect(mapStateToProps, null)(DeckView)
