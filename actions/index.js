import * as DecksDatabase from '../utils/decks';

// actions are payloads of information that send data from application to store
export const RECEIVE_DECKS = "RECEIVE_DECKS"

export const receiveDecks = decks => ({
  type:RECEIVE_DECKS,
  decks
});


// action creator is a function which creates an action

// an action creator can return a function instead of an action object
// When an action creator returns a function, that function will get executed by the Redux Thunk middleware
// function also dispatch the actions
export const getDecks = () => dispatch =>  (
  DecksDatabase
  .getDecks()
  .then(decks => dispatch(receiveDecks(decks)))
)

export const saveDeckTitle = (title) => dispatch => (
  DecksDatabase
  .saveDeckTitle(title)
  .then(newDecks => dispatch(receiveDecks(newDecks)))
)

// export const addCardToDeck = ( title, question) => dispatch => (
//   DecksDatabase
//   .addCardToDeck(title, question)
//   .then(newDecks => dispatch(receiveDecks(newDecks)))
// )


export const addCardToDeck = (title, question) => dispatch => (
  DecksDatabase
    .addCardToDeck(title, question)
    .then(updatedDecks => dispatch(receiveDecks(updatedDecks)))
)
