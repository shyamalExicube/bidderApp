import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../core/store_modal';
import { ProfileData } from '../core/profile_session';

@Injectable()
export class ContactActions {

  static CONTACT_FETCH = 'CONTACT_FETCH';
  static CONTACT_FETCH_SUCCESS = 'CONTACT_FETCH_SUCCESS';
  static CONTACT_FETCH_FAILED = 'CONTACT_FETCH_FAILED';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchContact() {
    this.ngRedux.dispatch({
      type: ContactActions.CONTACT_FETCH
    });
  };

  ContactFetchSuccess(payload:ProfileData) {
    console.log("hello");
    console.log(payload);
    
    this.ngRedux.dispatch({
      type: ContactActions.CONTACT_FETCH_SUCCESS,
      payload: payload,
    });
  };

  ContactFetchFailed(error) {
    console.log(error);
    this.ngRedux.dispatch({
      type: ContactActions.CONTACT_FETCH_FAILED,
      error:error
    });
  };

}