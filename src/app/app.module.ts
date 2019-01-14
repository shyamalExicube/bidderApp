import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgReduxModule } from '@angular-redux/store';
import { HttpModule } from '@angular/http';
import { StoreModule } from 'src/redux/store/all_module'
import { AddOptionsPageModule } from './add-options/add-options.module';
import * as firebase from 'firebase'
import { HttpClientModule } from '@angular/common/http';
import { TemplateEditPageModule } from './template-edit/template-edit.module';
import { AddtemplatePageModule } from './addtemplate/addtemplate.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
import { DeleteProjectPageModule } from './delete-project/delete-project.module';
import { Firebase } from '@ionic-native/firebase/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

// import { HttpClientModule } from '@angular/common/http'; 





var config = {
  apiKey: "AIzaSyCFw6romw9UJL88CwF3GHzvaZ1Xglf5bo0",
  authDomain: "comingprojects-7a21b.firebaseapp.com",
  databaseURL: "https://comingprojects-7a21b.firebaseio.com",
  projectId: "comingprojects-7a21b",
  storageBucket: "comingprojects-7a21b.appspot.com",
  messagingSenderId: "244910667822"
};
firebase.initializeApp(config);

// var config = {
//   apiKey: "AIzaSyCFw6romw9UJL88CwF3GHzvaZ1Xglf5bo0",
//   authDomain: "comingprojects-7a21b.firebaseapp.com",
//   databaseURL: "https://comingprojects-7a21b.firebaseio.com",
//   projectId: "comingprojects-7a21b",
//   storageBucket: "comingprojects-7a21b.appspot.com",
//   messagingSenderId: "244910667822"
// };
// firebase.initializeApp(config);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    NgReduxModule,
    StoreModule,
    HttpModule,
    AddOptionsPageModule,
    HttpClientModule,
    TemplateEditPageModule,
    AddtemplatePageModule,
    DeleteProjectPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Firebase,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
