import { Action } from 'redux';
import { ProfileActions } from '../actions/profile_actions';
import { MasterData } from '../core/master_session';
import { MasterActions } from '../actions/master_actions';
const INITIAL_STATE: MasterData = {
  masterdata: null,
  loading: false,
  error: "",
};

type Payload=any;
type Error=any;

export interface ActionWithPayload<T,E> extends Action {
  payload?: T;
  error?:E;
} 

export function MasterReducer(state: MasterData = INITIAL_STATE, action: ActionWithPayload<Payload,Error>): MasterData {
  switch (action.type) {
    case MasterActions.MASTER_FETCH:
      return {
        ...state,
        masterdata: null,
        loading: true,
        error: "",
      };
    case MasterActions.MASTER_FETCH_SUCCESS:
      return {
        ...state,
        masterdata: action.payload,
        loading: false,
        error: "",
      };
    case MasterActions.MASTER_FETCH_FAILED:
      return {
        ...state,
        masterdata: null,
        loading: false,
        error: action.error,
      };
  }

  return state;
}
