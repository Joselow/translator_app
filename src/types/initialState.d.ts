import { SUPPORTED_LANGUAGES, ACTION_TYPES, AUTO_LANGUAGE } from "../enums";

type AUTO_LANGUAGE = typeof AUTO_LANGUAGE

export interface InitialState {
  fromLanguage: FromLanguages;
  toLanguage: Languages;
  fromText: string;
  resultText: string;
  loading: boolean;
}

export type Action =
  | { type: ACTION_TYPES.INTERCHANGE_LANGUAGES }
  | { type: ACTION_TYPES.SET_FROM_LANGUAGE; payload: FromLanguages }
  | { type: ACTION_TYPES.SET_TO_LANGUAGE; payload: Languages }
  | { type: ACTION_TYPES.SET_FROM_TEXT; payload: string }
  | { type: ACTION_TYPES.SET_RESULT_TEXT; payload: string };

type Languages =  keyof typeof SUPPORTED_LANGUAGES
type FromLanguages = Languages | AUTO_LANGUAGE