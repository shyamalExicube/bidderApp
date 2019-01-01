//Import here all Epics and Reducer_module from store and epic_module and Actions import

import { NgModule } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';;
import { createLogger } from 'redux-logger';
import { RootEpics } from './epic_module';
import { IAppState } from '../core/store_modal';
import { rootReducer } from './reducer_module';

//actions
import { ProfileActions } from '../actions/profile_actions';

//epics
import { ProfileEpics } from '../epics/profile_epic';
import { FavoriteActions } from '../actions/favorite_actions';
import { FavoriteEpics } from '../epics/favorite_epic';
import { KeywordActions } from '../actions/keywords_actions';
import { KeywordEpics } from '../epics/keywords_epic';

@NgModule({
  providers: [
    RootEpics,
    //actions
    ProfileActions,
    FavoriteActions,
    KeywordActions,

    

    //epics
    ProfileEpics,
    FavoriteEpics,
    KeywordEpics
  ]
})

export class StoreModule {
  
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics,
  ) {
    store.configureStore(
      rootReducer,
      {},
      [ 
       createLogger(), 
        ...rootEpics.createEpics() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}