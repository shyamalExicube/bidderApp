import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { FavoriteActions } from 'src/redux/actions/favorite_actions';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public favoriteData:any;
  public myData:any;
  public sendData:any
  @select(['favoriteData', 'favoritedata'])
  readonly favoritedata$: Observable<any>;

  constructor(
    public favoriteActions:FavoriteActions,
    public nav:NavController
    ){ 
    // const projectsList=firebase.database().ref(`projects`);
    // projectsList.once('value',snapProjects=>{
    //   if(snapProjects.val()){
    //     this.projectData=snapProjects.val();
    //     console.log(this.projectData);
    //   }
    // })
     this.favoriteActions.fetchFavorite();
     let sub = this.favoritedata$.subscribe((res)=>{
      if(res){ 
        console.log(res);
        this.favoriteData=res;

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
}
