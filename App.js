import React, {Component} from 'react'
import { View, Platform, StatusBar } from 'react-native'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import NewDeck from './components/NewDeck'
import NewQuizzCard from './components/NewQuizzCard'
import Quiz from './components/Quiz'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Entypo, Ionicons } from '@expo/vector-icons'
import {purple,white} from './utils/colors'
import {Constants} from 'expo'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
//when we don't export any function then we can import reducer from reducers  file.
import reducer from './reducers'
// In App, we want to get all the data from database,Since Redux only supports the synchronous flow of data,
//we can use thunk middleware to asynchronously produce the HTTP request for this fetch action.
import thunk from 'redux-thunk'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger),
    applyMiddleware(thunk)
  )
)


const Stack = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView
  },
  NewQuizzCard:{
    screen:NewQuizzCard
  },
  Quiz:{
    screen:Quiz
  }
})

// use for switch between tabs.
const Tabs = TabNavigator({
  Decks:{
    screen:Stack,
    navigationOptions:{
      tabBarLabel:'Decks',
      tabBarIcon:({ tintColor }) => <Ionicons name='ios-list' size={30} color={tintColor} />
    }
  },
  NewDeck:{
    screen:NewDeck,
    navigationOptions:{
      tabBarLabel:'New Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
    }
  }
},
{
 navigationOptions: {
   header: null
 },
 tabBarOptions: {
   activeTintColor: Platform.OS === 'ios' ? purple : white,
   style: {
   height: 56,
     backgroundColor: Platform.OS === 'ios' ? white : purple,
     shadowColor: 'rgba(0, 0, 0, 0.24)',
   shadowOffset: {
       width: 0,
     height: 3
     },
     shadowRadius: 6,
     shadowOpacity: 1
   }
 }
})

// status bar
function FlashcardStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={{flex:1}}>
      <View style={{height:20}}/>
       <FlashcardStatusBar backgroundColor={purple} barStyle="light-content" />
       <Tabs/>
    </View>
    </Provider>
    );
  }
}
