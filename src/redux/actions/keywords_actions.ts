import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../core/store_modal';
import { KeywordData } from '../core/keywords_session';

@Injectable()
export class KeywordActions {

  static KEYWORD_FETCH = 'KEYWORD_FETCH';
  static KEYWORD_FETCH_SUCCESS = 'KEYWORD_FETCH_SUCCESS';
  static KEYWORD_FETCH_FAILED = 'KEYWORD_FETCH_FAILED';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchKeyword() {
    this.ngRedux.dispatch({
      type: KeywordActions.KEYWORD_FETCH,
      payload: "null"
    });
  };

  KeywordFetchSuccess(payload:KeywordData) {
    console.log("hello");
    console.log(payload);
    
    this.ngRedux.dispatch({
      type: KeywordActions.KEYWORD_FETCH_SUCCESS,
      payload: payload,
    });
  };

  KeywordFetchFailed(error) {
    console.log(error);
    this.ngRedux.dispatch({
      type: KeywordActions.KEYWORD_FETCH_FAILED,
      error:error
    });
  };

}