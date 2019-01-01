
import { combineReducers } from 'redux';
import { Observable } from 'rxjs/Observable';
import { ProfileReducer } from '../reducers/profile_reduces';
import { FavoriteReducer } from '../reducers/favorite_reducers';
import { KeywordReducer } from '../reducers/keywords_reducers';
export const rootReducer = 

  combineReducers({
    profileData: ProfileReducer,
    favoriteData: FavoriteReducer,
    keywordData: KeywordReducer
  })