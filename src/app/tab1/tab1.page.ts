import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { RouterModule, Router } from '@angular/router';
import * as firebase from 'firebase'
import { ProfileActions } from 'src/redux/actions/profile_actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @select(['profileData', 'profiledata'])
  readonly profiledata$: Observable<any>;



  public projectData:any;
  public profileImage:boolean=true;
  public myData:any;
  // public favo:boolean=true;
  public sendData:any

  constructor(
    private router: Router, 
    public nav:NavController,
    public navCtrl:NavController,
    public profileActions:ProfileActions
    ){ 
    // const projectsList=firebase.database().ref(`projects`);
    // projectsList.once('value',snapProjects=>{
    //   if(snapProjects.val()){
    //     this.projectData=snapProjects.val();
    //     console.log(this.projectData);
    //   }
    // })
     this.profileActions.fetchProfile();
     let sub = this.profiledata$.subscribe((res)=>{
      if(res){ 
        console.log(res);
        this.projectData=res;
      }
    });
  }

  goDetails(data){
    console.log(data);
    this.myData=data;
    data.link = encodeURIComponent(data.link)
    data.icon = encodeURIComponent(data.icon)
    data.pubdate = encodeURIComponent(data.pubdate)
    console.log(data.icon);
    this.sendData = JSON.stringify(data);
    this.nav.navigateForward('/details/'+this.sendData);
  }

  addFav(data){
    console.log(data);
    if(data.fav == true){
      alert("you have alrady added to fav");
    }else{
      data.fav = true
      console.log("added fav"+data);
      firebase.database().ref(`/favorites`).push(data);
    }
}
}

