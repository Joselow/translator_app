import { useReducer } from "react";
import { initialState, reducer } from "../reducer";
import { FromLanguages, Languages } from "../types/initialState";
import { ACTION_TYPES } from "../enums";

export function useTranslator () {
  const [ state, dispatch ]  = useReducer(reducer, initialState)

  const reducers = {
    interchangeLanguages: () => dispatch({ type: ACTION_TYPES.INTERCHANGE_LANGUAGES }), 
    setFromLanguage: (payload: FromLanguages) => dispatch({ type: ACTION_TYPES.SET_FROM_LANGUAGE, payload }), 
    setToLanguage: (payload: Languages) => dispatch({ type: ACTION_TYPES.SET_TO_LANGUAGE, payload }), 
    setFromText: (payload: string) => dispatch({ type: ACTION_TYPES.SET_FROM_TEXT, payload }), 
    setResultText: (payload: string) => dispatch({ type: ACTION_TYPES.SET_RESULT_TEXT, payload }), 
  }

  return { ...state, ...reducers }
}