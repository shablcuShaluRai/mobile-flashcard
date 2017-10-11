import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setLocalNotification, clearLocalNotification } from '../utils/notifications'
import { white, gray, green, red, purple } from '../utils/colors'



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
    const deck = this.props.navigation.state.params.decks
    const title = deck.title
    const questions = deck.questions
    const { currentQuestion, showQuestion, correctQuizNumber, quizOver} = this.state

    if(quizOver){
       clearLocalNotification()
         .then(setLocalNotification)
       const correctQuizPercentage = Math.round((correctQuizNumber/questions.length)*100)
       return(
         <View style={styles.container}>
         <Text style={styles.quizPercentageResults}>{ correctQuizPercentage} % Correct Quiz </Text>
         <TouchableOpacity
          style={styles.restartQuizButton}
          onPress = { () => this.restartQuiz()}>
         <Text style = { styles.btnText}> Restart Quiz </Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.backToDeckButton}
           onPress = { () => this.props.navigation.goBack()}>
         <Text style = { styles.btnText}>Back</Text>
         </TouchableOpacity>
         </View>
         )
   }
   else {
     return (
        <View style={styles.container}>
        <Text style={styles.numCards}> { currentQuestion }/ { questions.length } </Text>
         {
          showQuestion
          ?<Text  style={styles.showQuestionCardText}>{ questions[ currentQuestion - 1].question} </Text>
          :<Text  style={styles.showQuestionCardText}>{ questions[ currentQuestion - 1].answer} </Text>
         }
       <TouchableOpacity
       style={styles.flipCard}
       onPress={this.flipCard} >
       <Text style = {styles.btnText}>{ showQuestion ? 'answer' : 'question' }</Text>
       </TouchableOpacity>
       <TouchableOpacity
       style={styles.correctButton}
       onPress={this.nextQuiz.bind(null, true)}>
       <Text style = {styles.btnText}>Correct</Text>
       </TouchableOpacity>
       <TouchableOpacity
       style={styles.incorrectButton}
       onPress={this.nextQuiz.bind(null, false)}>
       <Text style = {styles.btnText}>Incorrect</Text>
       </TouchableOpacity>
      </View>
     )
}
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white
  },
  showQuestionCardText: {
    fontSize: 42,
    fontWeight: 'bold'
  },
  numCards: {
    fontSize: 18,
    fontWeight: '500',
    color: gray
  },
  flipCard: {
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    height: 45,
   justifyContent: 'center',
   alignItems: 'center',
  },
  correctButton: {
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: green,
    height: 45,
   justifyContent: 'center',
   alignItems: 'center',
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  incorrectButton: {
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 55,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: red,
    height: 45,
   justifyContent: 'center',
   alignItems: 'center',
 },
  quizPercentageResults: {
    fontSize: 42,
    fontWeight: '500'
  },
  restartQuizButton: {
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    height: 45,
   justifyContent: 'center',
   alignItems: 'center',
  },
  backToDeckButton: {
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 90,
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: purple,
    height: 45,
   justifyContent: 'center',
   alignItems: 'center',
  }
})
