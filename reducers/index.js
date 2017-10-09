import { combineReducers } from 'redux'
import { RECEIVE_DECKS } from '../actions'


function decks(state = {}, action){
  switch (action.type) {
    case RECEIVE_DECKS :
    return {
      ...action.decks,
      ...state
    }
      default:
     return state
  }
}

export default combineReducers({
  decks,
})
