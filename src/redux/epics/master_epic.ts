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
import { ProfileActions } from '../actions/profile_actions';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs';
import * as firebase from 'firebase'
import { MasterActions } from '../actions/master_actions';

@Injectable()   
export class MasterEpics {
    public projectData:any
  constructor(private http: Http ,public masteraction:MasterActions) {}

 //http://www.mocky.io/v2/5ad9e9312f00005e00cfe010
  master = (action$: ActionsObservable<any>) => {
    return action$.ofType(MasterActions.MASTER_FETCH)
      .mergeMap(({payload}) => {
          console.log(payload)
        return new Observable(() => {
        //   let headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //   let options = new RequestOptions({ headers: headers });
        //   this.http.get("http://77.104.162.183/~alrayya3/alrayyan.tv/wp-json/tvapi/v2/gellary/",options)
        //   .subscribe((data)=>{
        //       console.log(data);
        //     let result = data.json();
        //     if(data.statusText == "OK"){
        //         this.profileaction.ProfileFetchSuccess(result);
        //     }
        //     else{
        //          this.profileaction.ProfileFetchFailed("API error/ Network error"); 
        //         }
        //   })
        const projectsList=firebase.database().ref();
        projectsList.once('value',snapProjects=>{
          if(snapProjects.val()){
            this.projectData=snapProjects.val();
            this.masteraction.MasterFetchSuccess(this.projectData);
            console.log(this.projectData);
          }else{
            this.masteraction.MasterFetchFailed("API error/ Network error"); 
          }
        })

        })
      })
  }
}