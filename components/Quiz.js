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


  nextQuiz = (quizzes) =>{
    const deck = this.props.navigation.state.params.decks;
    const questions = deck.questions
    // number of correct quiz
    const numberCorrect = (
      quizzes
      ? this.state.numberCorrect + 1
      : this.state.numberCorrect
    )
    const currentQuestion = this.state.currentQuestion + 1
    const showQuestion = true;
      this.setState({ currentQuestion, showQuestion, numberCorrect})
      if(currentQuestion > questions.length){
        this.setState({ quizOver: true})
      }
  }

render(){
  console.log("quiz deck list ", this.props);
  const deck = this.props.navigation.state.params.decks
  console.log("quiz deck", deck.title);
  const title = deck.title
  const questions = deck.questions
  const { currentQuestion, showQuestion, numberCorrect, quizOver} = this.state
  console.log("quiz number correct ", numberCorrect);
  console.log("quizz show questions", showQuestion);
  console.log("quizz currentQuestion", currentQuestion);
  const quiz =  questions[ currentQuestion - 1]?questions[ currentQuestion - 1].question:1
  console.log("quizz", quiz);

  if(quizOver){
    return(
         <Text> quiz over </Text>
         )
  }

  else {
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

    <TouchableOpacity onPress={this.nextQuiz.bind(null, true)}>
      <Text>Correct</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.nextQuiz.bind(null, false)}>
      <Text>Incorrect</Text>
    </TouchableOpacity>
    </View>

  )

}
}
}
