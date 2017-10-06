import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


export default function DecklistItem({title, questions}){
  return(
    <View style = {styles.listItem}>

    <TouchableOpacity onPress={() => alert('hey you touch me')}>
    <Text>{ title }</Text>
    <Text> {`${questions.length} questions`} </Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
    padding: 10,

  }
})
