import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../enums";
import { FromLanguages, InitialState, Languages } from "../types/initialState";


const getOtherLanguage = (currentLang: Languages): Languages => {
  const langsArray = Object.keys(SUPPORTED_LANGUAGES) as Languages []
  const langIndex = langsArray.indexOf(currentLang)

  return langIndex === 0 ?  langsArray[langIndex + 1] : langsArray[langIndex - 1 ]
}

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

export const setFromLanguage = (state: InitialState, payload: FromLanguages): InitialState => {
  if (payload === AUTO_LANGUAGE) {
    state.fromLanguage = payload 
    state.lastExchangeValue = null
  }
  else if (payload === state.toLanguage) {
    if (state.lastExchangeValue === null || state.lastExchangeValue === payload) {
      state.toLanguage = getOtherLanguage(payload)
    } 
    else {
      state.toLanguage = state.lastExchangeValue
    }
    state.fromLanguage = payload 
    state.lastExchangeValue = payload
  } else {
    state.fromLanguage = payload 
    state.lastExchangeValue = payload
  }
  return {
    ...state,
  }
};

export const setToLanguage = (state: InitialState, payload: Languages): InitialState => {
  if (payload === state.fromLanguage) {
    if (state.lastExchangeValue === null || state.lastExchangeValue === payload) {
      state.fromLanguage = getOtherLanguage(payload)
    }
    else {
      state.fromLanguage =  state.lastExchangeValue
    }
    state.toLanguage = payload
    state.lastExchangeValue = payload
  }
  else{
    state.toLanguage = payload
    state.lastExchangeValue = payload  
  }

  return {
    ...state,
  }
};

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
