import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../core/store_modal';
import { MasterData } from '../core/master_session';

@Injectable()
export class MasterActions {

  static MASTER_FETCH = 'MASTER_FETCH';
  static MASTER_FETCH_SUCCESS = 'MASTER_FETCH_SUCCESS';
  static MASTER_FETCH_FAILED = 'MASTER_FETCH_FAILED';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchMaster() {
    this.ngRedux.dispatch({
      type: MasterActions.MASTER_FETCH,
      payload: "null"
    });
  };

  MasterFetchSuccess(payload:MasterData) {
    console.log("hello");
    console.log(payload);
    
    this.ngRedux.dispatch({
      type: MasterActions.MASTER_FETCH_SUCCESS,
      payload: payload,
    });
  };

  MasterFetchFailed(error) {
    console.log(error);
    this.ngRedux.dispatch({
      type: MasterActions.MASTER_FETCH_FAILED,
      error:error
    });
  };

}