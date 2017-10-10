import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setLocalNotification, clearLocalNotification } from '../utils/notifications'


export default class Quiz extends Component{

 state = {
   currentQuestion:1,
   showQuestion:true,
   correctQuizNumber:0,
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
    const correctQuizNumber = (
      quizzes
      ? this.state.correctQuizNumber + 1
      : this.state.correctQuizNumber
    )
    const currentQuestion = this.state.currentQuestion + 1
    const showQuestion = true;
      this.setState({ currentQuestion, showQuestion, correctQuizNumber})
      if(currentQuestion > questions.length){
        this.setState({ quizOver: true})
      }
  }

  restartQuiz = () => {
    this.setState({
      currentQuestion:1,
      showQuestion:true,
      correctQuizNumber:0,
      quizOver: false
    })
  }

render(){
  console.log("quiz deck list ", this.props);
  const deck = this.props.navigation.state.params.decks
  console.log("quiz deck", deck.title);
  const title = deck.title
  const questions = deck.questions
  const { currentQuestion, showQuestion, correctQuizNumber, quizOver} = this.state
  console.log("quiz number correct ", correctQuizNumber);
  console.log("quizz show questions", showQuestion);
  console.log("quizz currentQuestion", currentQuestion);
  const quiz =  questions[ currentQuestion - 1]?questions[ currentQuestion - 1].question:1
  console.log("quizz", quiz);

  if(quizOver){
    clearLocalNotification()
    .then(setLocalNotification)
    const correctQuizPercentage = Math.round((correctQuizNumber/questions.length)*100)
    console.log("quiz percenatge", correctQuizPercentage);
    return(
      <View>
         <Text>{ correctQuizPercentage} % Correct Quiz </Text>
         <TouchableOpacity onPress = { () => this.restartQuiz()}>
         <Text> Restart Quiz </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress = { () => this.props.navigation.goBack()}>
         <Text>Back</Text>
         </TouchableOpacity>
      </View>
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
