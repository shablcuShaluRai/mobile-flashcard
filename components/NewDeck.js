import React, { Component } from 'react'
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, ScrollView} from 'react-native'
import { saveDeckTitle } from '../actions'
import { connect } from 'react-redux'
import { white, purple, black} from '../utils/colors'

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
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Text style={styles.newDeckTitle}>What is the title of your new deck?</Text>
      <TextInput
        style={styles.input}
        placeholder = " New Deck Title"
        onChangeText={(title) => this.setState({title})}
        value = {this.state.title}
      />

      <TouchableOpacity
       style={styles.submitButton}
       onPress = {this.submit}>
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
  newDeckTitle: {
    fontSize: 42,
    fontWeight: 'bold'
  },
  input: {
    marginTop: 60,
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


function mapDispatchToProps(dispatch){
  return {
    saveDeckTitle:(title)=> dispatch(saveDeckTitle(title))
  }
}

//We can either retrieve data by obtaining its current state,
// or change its state by dispatching an action

export default connect(null, mapDispatchToProps)(NewDeck)
