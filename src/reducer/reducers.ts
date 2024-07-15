import { AUTO_LANGUAGE } from "../enums";
import { FromLanguages, InitialState, Languages } from "../types/initialState";

export const interchangeLanguages = (state: InitialState): InitialState => {
  if (state.fromLanguage === AUTO_LANGUAGE) return state

  return {
    ...state,
    fromLanguage: state.toLanguage,
    toLanguage: state.fromLanguage,
    fromText: state.resultText,
    resultText: state.fromText,
  }
};

export const setFromLanguage = (state: InitialState, payload: FromLanguages): InitialState => ({
  ...state,
  fromLanguage: payload,
});

export const setToLanguage = (state: InitialState, payload: Languages): InitialState => ({
  ...state,
  loading: true,
  toLanguage: payload,
  resultText: '',
});

export const setFromText = (state: InitialState, payload: string = ''): InitialState => ({
  ...state,
  loading: false,
  fromText: payload,
});

export const setResultText = (state: InitialState, payload: string = ''): InitialState => ({
  ...state,
  loading: false,
  resultText: payload,
});
