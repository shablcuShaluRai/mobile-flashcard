import React, { Component } from 'react'
import {View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'


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
      <KeyboardAvoidingView behavior='padding' >
         <Text>{ `Add Card to the '${title}' Deck` }</Text>
        <Text>Question</Text>
        <TextInput
          onChangeText={(question) => this.setState({question})}
          value={this.state.question} />
        <Text>Answer</Text>
        <TextInput
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer} />
        <TouchableOpacity onPress={this.submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

function mapDispatcToProps(dispatch){
  return {
    addCardToDeck: (title, quizzCard) => dispatch(addCardToDeck(title, quizzCard))
  }
}

export default connect(null, mapDispatcToProps)(NewQuizzCard)
