import { Action } from 'redux';
import { ProfileActions } from '../actions/profile_actions';
import { FavoriteData } from '../core/favorite_session';
import { FavoriteActions } from '../actions/favorite_actions';
const INITIAL_STATE: FavoriteData = {
  favoritedata: null,
  loading: false,
  error: "",
};

type Payload=any;
type Error=any;

export interface ActionWithPayload<T,E> extends Action {
  payload?: T;
  error?:E;
} 

export function FavoriteReducer(state: FavoriteData = INITIAL_STATE, action: ActionWithPayload<Payload,Error>): FavoriteData {
  switch (action.type) {
    case FavoriteActions.FAVORITE_FETCH:
      return {
        ...state,
        favoritedata: null,
        loading: true,
        error: "",
      };
    case FavoriteActions.FAVORITE_FETCH_SUCCESS:
      return {
        ...state,
        favoritedata: action.payload,
        loading: false,
        error: "",
      };
    case FavoriteActions.FAVORITE_FETCH_FAILED:
      return {
        ...state,
        favoritedata: null,
        loading: false,
        error: action.error,
      };
  }

  return state;
}
