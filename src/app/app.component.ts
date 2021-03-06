import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase'
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MasterActions } from 'src/redux/actions/master_actions';
import { AlertControllerService } from './alert-controller.service';
import { Firebase } from '@ionic-native/firebase/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  email:string="admin@admin.com";
  password:string="123456";
  public masterdata:any;
  public msg:any;
  public mytopic:any;
  public currentUser:any
  
  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public masterAction:MasterActions,
    public toastControl:AlertControllerService,
    private cordovaFirebase: Firebase,
    private firebase: Firebase,
    private localNotifications: LocalNotifications,
    public alertCtrl:AlertController
  ) {
    this.initializeApp();
    this.authentication();
  }
 authentication(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.currentUser=user;
          this.masterAction.fetchMaster();
            let sub = this.masterdata$.subscribe((res)=>{
              if(res){ 
                console.log(res);
                this.masterdata=res;   
              }
            });

            if(this.platform.is('ios')){
              this.cordovaFirebase.grantPermission();
              // this.localNotifications.requestPermission();
            }
            this.cordovaFirebase.getToken()
              .then(token => {
                console.log(token);
                
                this.mytopic=this.cordovaFirebase.subscribe("AllPush");
                console.log("heeeeee");
                console.log(this.mytopic);
                console.log("heeeeee");
                firebase.database().ref('users/' + user.uid + '/pushToken').set(token);
              })
              .catch(error =>{    
              });
    
          this.cordovaFirebase.onTokenRefresh()
              .subscribe((token: string) => {
                  firebase.database().ref('users/' + user.uid + '/pushToken').set(token);
              });
              this.cordovaFirebase.onNotificationOpen().subscribe(async (response)=>{
                console.log("how r u");
                console.log(response);
                console.log("how r u");
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
