import { Action } from 'redux';
import { KeywordData } from '../core/keywords_session';
import { KeywordActions } from '../actions/keywords_actions';

const INITIAL_STATE: KeywordData = {
  keyworddata: null,
  loading: false,
  error: "",
};

type Payload=any;
type Error=any;

export interface ActionWithPayload<T,E> extends Action {
  payload?: T;
  error?:E;
} 

export function KeywordReducer(state: KeywordData = INITIAL_STATE, action: ActionWithPayload<Payload,Error>): KeywordData {
  switch (action.type) {
    case KeywordActions.KEYWORD_FETCH:
      return {
        ...state,
        keyworddata: null,
        loading: true,
        error: "",
      };
    case KeywordActions.KEYWORD_FETCH_SUCCESS:
      return {
        ...state,
        keyworddata: action.payload,
        loading: false,
        error: "",
      };
    case KeywordActions.KEYWORD_FETCH_FAILED:
      return {
        ...state,
        keyworddata: null,
        loading: false,
        error: action.error,
      };
  }

  return state;
}
