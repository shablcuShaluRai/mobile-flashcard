import React, { Component } from 'react'
import {View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet, ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'
import { white, black, purple} from '../utils/colors'


class NewQuizzCard extends Component{

  state = {
    question:'',
    answer:''
  }

submit = () => {
    const { question, answer } = this.state
    const title = this.props.navigation.state.params.title
    const quizzCard = { question, answer }
    if (question !== '' && answer !== '') {
      this.props.addCardToDeck(title,quizzCard)
      this.props.navigation.goBack()
      this.setState({ question: '', answer: '' })
    }
  }


  render(){
    const title = this.props.navigation.state.params.title;

    return(
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <KeyboardAvoidingView behavior='padding' style={styles.container} >
        <Text style = {styles.addCard}>Add Card</Text>
        <Text style = {styles.textBoxLabel}>Question</Text>
        <TextInput
          style={styles.input}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question} />

        <Text style={styles.textBoxLabel}>Answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer} />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submit}>
          <Text style = {styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </ScrollView>
    )
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
  addCard: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 40
  },
  textBoxLabel: {
    fontWeight: 'bold'
  },
  input: {
    marginBottom: 20,
    padding: 10,
    width: 300,
    backgroundColor: white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black
  },
  submitButton: {
    marginTop: 30,
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
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  contentContainer: {
  paddingVertical: 50
}
})

function mapDispatcToProps(dispatch){
  return {
    addCardToDeck: (title, quizzCard) => dispatch(addCardToDeck(title, quizzCard))
  }
}

export default connect(null, mapDispatcToProps)(NewQuizzCard)
