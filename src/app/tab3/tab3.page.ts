import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { FavoriteActions } from 'src/redux/actions/favorite_actions';
import { NavController } from '@ionic/angular';
import { MasterActions } from 'src/redux/actions/master_actions';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public favoriteData:any;
  public myData:any;
  public sendData:any;
  public myFav:any=[]
  @select(['favoriteData', 'favoritedata'])
  readonly favoritedata$: Observable<any>;

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(
    public favoriteActions:FavoriteActions,
    public nav:NavController,
    public masterActions:MasterActions
    ){ 
    //  this.favoriteActions.fetchFavorite();
    //  let sub = this.favoritedata$.subscribe((res)=>{
    //   if(res){ 
    //     console.log(res);
    //     this.favoriteData=res;

    //   }
    // });

    this.masterActions.fetchMaster();
     let sub = this.masterdata$.subscribe((res)=>{
      if(res){ 
        console.log(res);
        this.favoriteData=res.favorites;
        console.log(this.favoriteData);
        for(let key in this.favoriteData){
          console.log(key);
          console.log(this.favoriteData[key]);
           this.myFav.push(this.favoriteData[key]);
          // console.log(this.myFav);
        }
        

      }
    });
  }

  goDetails(i){
    this.nav.navigateForward('/details/'+i);
  }
}
