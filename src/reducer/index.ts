import { ACTION_TYPES } from "../enums"
import type { Action, InitialState } from "../types/initialState"
import { interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResultText } from "./reducers"

const ACTIONS_DICT = {
  [ACTION_TYPES.INTERCHANGE_LANGUAGES]: interchangeLanguages,
  [ACTION_TYPES.SET_FROM_LANGUAGE]: setFromLanguage,
  [ACTION_TYPES.SET_TO_LANGUAGE]: setToLanguage,
  [ACTION_TYPES.SET_FROM_TEXT]: setFromText,
  [ACTION_TYPES.SET_RESULT_TEXT]: setResultText,
}

export const initialState: InitialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  resultText: '',
  loading: false
}

export const reducer = (state: InitialState, action: Action): InitialState => {
  const fn = ACTIONS_DICT[action.type]
  if (!fn) return state

  if ('payload' in action) {
    return fn(state, action.payload);
  } else {
    return fn(state) 
  }
}