import React, { Component } from 'react'
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native'
import { saveDeckTitle } from '../actions'
import { connect } from 'react-redux'

 class NewDeck extends Component{

state= {
  title : ''
}

// when submit the decksname , call submit method
submit = () =>{
  title = this.state.title;
  if(title !== ''){
    this.props.saveDeckTitle(title)
      this.props.navigation.navigate('Decks');
      this.setState({title: ''})
  }

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


function mapDispatchToProps(dispatch){
  return {
    saveDeckTitle:(title)=> dispatch(saveDeckTitle(title))
  }
}

//We can either retrieve data by obtaining its current state,
// or change its state by dispatching an action

export default connect(null, mapDispatchToProps)(NewDeck)
