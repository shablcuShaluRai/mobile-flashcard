import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'


export default class Quiz extends Component{

 state = {
   currentQuestion:1,
   showQuestion:true,
   numberCorrect:0,
   quizOver: false
 }

 flipCard = () => {
     const showQuestion = !this.state.showQuestion
     this.setState({ showQuestion })
  }

render(){
  console.log("quiz deck list ", this.props.navigation);
  const deck = this.props.navigation.state.params.decks
  console.log("quiz deck", deck.title);
  const title = deck.title

  const questions = deck.questions
  const { currentQuestion, showQuestion, numberCorrect, quizOver} = this.state

  return (
    <View>
    <Text>Deck: { title } </Text>
    <Text> { currentQuestion }/ { questions.length } </Text>
    {
      showQuestion
      ?<Text>{ questions[ currentQuestion - 1].question} </Text>
      :<Text>{ questions[ currentQuestion - 1].answer} </Text>
    }

    <TouchableOpacity onPress={this.flipCard}>
       <Text>{ showQuestion ? 'answer' : 'question' }</Text>
    </TouchableOpacity>
    </View>

  )
}


}
