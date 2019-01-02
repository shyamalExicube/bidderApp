import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { RouterModule, Router } from '@angular/router';
import * as firebase from 'firebase'
import { ProfileActions } from 'src/redux/actions/profile_actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { MasterActions } from 'src/redux/actions/master_actions';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @select(['profileData', 'profiledata'])
  readonly profiledata$: Observable<any>;

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  public projectData:any;
  public profileImage:boolean=true;
  public myData:any;
  // public favo:boolean=true;
  public sendData:any;
  public totalData:any

  constructor(
    private router: Router, 
    public nav:NavController,
    public navCtrl:NavController,
    public profileActions:ProfileActions,
    public masterAction:MasterActions
    ){ 
    //  this.profileActions.fetchProfile();
    //  let sub = this.profiledata$.subscribe((res)=>{
    //   if(res){ 
    //     console.log(res);
    //     this.projectData=res;
    //   }
    // });

    this.masterAction.fetchMaster();
    let sub = this.masterdata$.subscribe((res)=>{
      if(res){ 
        console.log(res);  
        this.totalData=res.entries
        console.log(this.totalData);
      }
    });

  }

  goDetails(i){
    console.log(i);
    // this.myData=data;
    // data.link = encodeURIComponent(data.link)
    // data.icon = encodeURIComponent(data.icon)
    // data.dated = encodeURIComponent(data.dated);
    // data.description = data.description.toString();
    // data.description = encodeURIComponent(data.description);
    //  console.log(data.description);

    // this.sendData = JSON.stringify(data);

    this.nav.navigateForward('/details/'+i);
  }

  addFav(data,i){
    console.log(data);
    console.log(i);
    console.log(this.totalData[i]);
    if(data.fav == true){
      alert("you have alrady added to fav");
    }else{
      data.fav = true;
      this.totalData[i].fav = true;
      console.log("added fav"+data);
      firebase.database().ref(`/favorites/`).push(data).then(()=>{
        firebase.database().ref(`/entries/` +i).update({
          fav:this.totalData[i].fav
        })
        alert("added to fav");
      });
    }
}
}

