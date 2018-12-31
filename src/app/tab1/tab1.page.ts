import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { RouterModule, Router } from '@angular/router';
import * as firebase from 'firebase'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public projectData:any;
  public profileImage:boolean=true;
  public myData:any
 

  constructor(private router: Router, public nav:NavController,public navCtrl:NavController){ 
    const projectsList=firebase.database().ref(`projects`);
    projectsList.once('value',snapProjects=>{
      if(snapProjects.val()){
        this.projectData=snapProjects.val();
        console.log(this.projectData);
      }
    })
  }

  goDetails(data){
    console.log(data);
    this.myData=data;
    data.link = encodeURIComponent(data.link)
    data.icon = encodeURIComponent(data.icon)
    data.pubdate = encodeURIComponent(data.pubdate)
    console.log(data.icon);
    let sendData = JSON.stringify(data);
    this.nav.navigateForward('/details/'+sendData);
  }

  addFav(data){
    console.log(data);
    console.log("added fav");
    
    firebase.database().ref(`/favorites`).push({data,fav:true});
}
}

