import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs';
import * as firebase from 'firebase'
import { KeywordActions } from '../actions/keywords_actions';


@Injectable()   
export class KeywordEpics {
public keywordData:any;
public keywords:any=[];
constructor(private http: Http ,public keywordaction:KeywordActions) {}

 //http://www.mocky.io/v2/5ad9e9312f00005e00cfe010
  keyword = (action$: ActionsObservable<any>) => {
    return action$.ofType(KeywordActions.KEYWORD_FETCH)
      .mergeMap(({payload}) => {
          console.log(payload)
        return new Observable(() => {

        const Keywords=firebase.database().ref(`keywords`);
        Keywords.once('value',snapKey=>{
            console.log(snapKey.val());
        //   if(snapKey.val()){
        //     this.keywordData=snapKey.val();
        //     this.keywordaction.KeywordFetchSuccess(this.keywordData);
        //     console.log(this.keywordData);
        //   }else{
        //     this.keywordaction.KeywordFetchFailed("API error/ Network error"); 
        //   }
        })

        })
      })
  }
}