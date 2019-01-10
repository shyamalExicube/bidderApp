import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase'
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MasterActions } from 'src/redux/actions/master_actions';
import { AlertControllerService } from './alert-controller.service';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  email:string="admin@admin.com";
  password:string="123456";
  public masterdata:any
  
  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public masterAction:MasterActions,
    public toastControl:AlertControllerService
  ) {
    this.initializeApp();
     this.authentication()
  }
  authentication(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          // alert("found");
          
          this.masterAction.fetchMaster();
            let sub = this.masterdata$.subscribe((res)=>{
              if(res){ 
                console.log(res);
                this.masterdata=res;   
              }
            });
      }else{
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((res)=>{
          if(res){
            console.log(res);
            this.masterAction.fetchMaster();
            let sub = this.masterdata$.subscribe((res)=>{
              if(res){ 
                console.log(res);
                this.masterdata=res;   
              }
            });
          }
        }).catch((error)=>{
          this.toastControl.openToast(error.message,1500)
        });
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
