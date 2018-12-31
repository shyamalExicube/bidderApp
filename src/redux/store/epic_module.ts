
import { Injectable } from '@angular/core';
import { createEpicMiddleware } from 'redux-observable';
// import { LoginEpics } from '../epics/login_epic';
// import { Observable } from 'rxjs/Observable';
// import { TimeTableEpics } from '../epics/time_table_epic';
// import { ProgramScheduleEpics } from '../epics/program_schedule_epic';
// import { ContactEpics } from '../epics/contact_epic';
// import { GalleryEpics } from '../epics/gallery_epic';

@Injectable()
export class RootEpics {
  constructor(
    //   private loginepics: LoginEpics,
    //   private timetableepics:TimeTableEpics,
    //   private programepics:ProgramScheduleEpics,
    //   private contactepics:ContactEpics,
    //   private galleryEpics:GalleryEpics
  ) {}

  public createEpics() {
    return [
        // createEpicMiddleware(this.loginepics.login),
        // createEpicMiddleware(this.loginepics.registration),
    //    createEpicMiddleware(this.timetableepics.showtabledata),
    //    createEpicMiddleware(this.programepics.program),
    //    createEpicMiddleware(this.contactepics.contact),
    //    createEpicMiddleware(this.galleryEpics.gallery),
    ];
  }
}