
import { Injectable } from '@angular/core';
import { createEpicMiddleware } from 'redux-observable';
import { ProfileEpics } from '../epics/profile_epic';
import { Observable } from 'rxjs/Observable';
import { FavoriteEpics } from '../epics/favorite_epic';
import { KeywordEpics } from '../epics/keywords_epic';


@Injectable()
export class RootEpics {
  constructor(
      private profilepics: ProfileEpics,
      private favoriteepics: FavoriteEpics,
      private keywordepics: KeywordEpics
  ) {}

  public createEpics() {
    return [
        createEpicMiddleware(this.profilepics.profile),
        createEpicMiddleware(this.favoriteepics.favorite),
        createEpicMiddleware(this.keywordepics.keyword)
    ];
  }
}