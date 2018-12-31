//Import here all Epics and Reducer_module from store and epic_module and Actions import

import { NgModule } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';;
import { createLogger } from 'redux-logger';
import { RootEpics } from './epic_module';
import { IAppState } from '../core/store_modal';
import { rootReducer } from './reducer_module';
// import { IAppState } from '../core/store_modal';
// import { RootEpics } from './epic_module';
// import { rootReducer } from './reducer_module';

//actions
// import { LoginActions } from '../actions/login_action';
// import {TimeTableActions} from '../actions/time_table_schedule';
// import { ProgramScheduleActions } from '../actions/program_schedule';

//epics
// import { LoginEpics } from '../epics/login_epic';
// import { ProgramScheduleEpics } from '../epics/program_schedule_epic';
// import { ContactActions } from '../actions/contact_action';
// import { ContactEpics } from '../epics/contact_epic';
// import { GalleryActions } from '../actions/gallery_action';
// import { GalleryEpics } from '../epics/gallery_epic';
// import { TimeTableActions } from '../actions/time_table_schedule';
// import { TimeTableEpics } from '../epics/time_table_epic';

@NgModule({
  providers: [
    RootEpics,
    //actions
    // LoginActions,
    // ContactActions,
    // TimeTableActions,
    // ProgramScheduleActions,
    // GalleryActions,
    

    //epics
    // LoginEpics,
    // ContactEpics,
    // GalleryEpics,
    // TimeTableEpics,
    // ProgramScheduleEpics
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