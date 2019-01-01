import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../core/store_modal';
import { FavoriteData } from '../core/favorite_session';

@Injectable()
export class FavoriteActions {

  static FAVORITE_FETCH = 'FAVORITE_FETCH';
  static FAVORITE_FETCH_SUCCESS = 'FAVORITE_FETCH_SUCCESS';
  static FAVORITE_FETCH_FAILED = 'FAVORITE_FETCH_FAILED';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchFavorite() {
    this.ngRedux.dispatch({
      type: FavoriteActions.FAVORITE_FETCH,
      payload: "null"
    });
  };

  FavoriteFetchSuccess(payload:FavoriteData) {
    console.log("hello");
    console.log(payload);
    
    this.ngRedux.dispatch({
      type: FavoriteActions.FAVORITE_FETCH_SUCCESS,
      payload: payload,
    });
  };

  FavoriteFetchFailed(error) {
    console.log(error);
    this.ngRedux.dispatch({
      type: FavoriteActions.FAVORITE_FETCH_FAILED,
      error:error
    });
  };

}