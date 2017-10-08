import React, { Component } from 'react'
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native'
import { saveDeckTitle } from '../utils/decks'

export default class NewDeck extends Component{

state= {
  title : ''
}

submit = () =>{
  saveDeckTitle(this.state.title)
  this.props.navigation.navigate('Decks');
}

  render(){
    return(
      <KeyboardAvoidingView behavior='padding'>

      <TextInput
        placeholder = "create new Decks"
        onChangeText={(title) => this.setState({title})}
        value = {this.state.title}
      />

      <TouchableOpacity
        onPress = {this.submit}>
       <Text>Submit</Text>
      </TouchableOpacity>

      </KeyboardAvoidingView>

    )
  }
}
