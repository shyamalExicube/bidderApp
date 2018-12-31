import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase'


var config = {
  apiKey: "AIzaSyCFw6romw9UJL88CwF3GHzvaZ1Xglf5bo0",
  authDomain: "comingprojects-7a21b.firebaseapp.com",
  databaseURL: "https://comingprojects-7a21b.firebaseio.com",
  projectId: "comingprojects-7a21b",
  storageBucket: "comingprojects-7a21b.appspot.com",
  messagingSenderId: "244910667822"
};
firebase.initializeApp(config);


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
