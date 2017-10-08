import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'mobile-flashcards:decks'

// Asyncstorage function for fetch decks.
// await keyword can be used only inside function defined with async.
// An async function returns promises that are resolved with
// function’s return value or rejected with uncaught errors.
export async function getDecks() {
  let response = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  let decks = await JSON.parse(response) || {};
  return decks;
}

// take in a single id argument and return the deck associated with that id.
export async function getDeck(id) {
  let decks = await getDecks();
  return decks[id];
}

//take in a single title argument and add it to the decks
export async function saveDeckTitle(title) {
  let decks = await getDecks();
  let savedDecks = {
    ...decks,
    [title]: {
      title,
      questions: []
    }
  }

  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(savedDecks));
}


export async function getDecksData() {
  let decks = await getDecks();
  let decksArray = Object.keys(decks).map((key) => {
    return decks[key]
  })
  return decksArray;
}
