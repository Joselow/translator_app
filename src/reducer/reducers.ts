import { InitialState } from "../types/initialState";

export const interchangeLanguages = (state: InitialState): InitialState => ({
  ...state,
  fromLanguage: state.toLanguage,
  toLanguage: state.fromLanguage,
  fromText: state.resultText,
  resultText: state.fromText,
});

export const setFromLanguage = (state: InitialState, payload: string = ''): InitialState => ({
  ...state,
  fromLanguage: payload,
});

export const setToLanguage = (state: InitialState, payload: string = ''): InitialState => ({
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
