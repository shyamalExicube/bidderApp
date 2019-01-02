import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddOptionsPage } from '../add-options/add-options.page';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { KeywordActions } from 'src/redux/actions/keywords_actions';
import * as firebase from 'firebase'
import { MasterActions } from 'src/redux/actions/master_actions';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  demo: string = "camera"
  public keywords:any;
  public negativeKeys:any;
  public negativeInputs:any=[]
  public myData:any;
  public positiveKeys:any;
  public positiveInputs:any=[]
  public totalData:any
  public positivekeywords:any
  public negativekeywords:any


  @select(['keywordData', 'keyworddata'])
  readonly keyworddata$: Observable<any>;

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(
    public modalController: ModalController,
    public keywordActions:KeywordActions,
    public masterAction:MasterActions) {
    // this.keywordActions.fetchKeyword();
  //   let sub = this.keyworddata$.subscribe((res)=>{
  //    if(res){ 
  //      this.keywords=res;
  //      console.log(this.keywords.negativeKewwords);
  //      this.negativeKeys=this.keywords.negativeKewwords;
  //      for(let key in this.negativeKeys){
  //        console.log(this.negativeKeys[key]);
  //        this.negativeKeys[key].id=key
  //         this.negativeInputs.push(this.negativeKeys[key]);
  //       console.log(this.negativeInputs); 
  //           }
  //           console.log(this.keywords.positiveKewwords);
  //           this.positiveKeys=this.keywords.positiveKewwords
  //           for(let key in this.positiveKeys){
  //            console.log(this.positiveKeys[key]);
  //            this.positiveKeys[key].id=key
  //            this.positiveInputs.push(this.positiveKeys[key]);
  //            console.log(this.positiveInputs); 
  //                }
  //    }
  //  });

  this.masterAction.fetchMaster();
  let sub = this.masterdata$.subscribe((res)=>{
    if(res){ 
      console.log(res);  
      this.keywords=res.keywords
      console.log(this.keywords);
      this.positivekeywords=this.keywords.positive;
      this.negativekeywords=this.keywords.negative
      // console.log(this.totalData);
    }
  });

  }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddOptionsPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  deleteNegKey(i){
    console.log(this.negativeInputs[i]);
    firebase.database().ref('/keywords/' +`/negative/` +i+ '/').remove().then(()=>{
      alert("successfully deleted");
    });
  }
  deletePosKey(i){
    console.log(i);
    console.log(this.positiveInputs[i]);
    firebase.database().ref('/keywords/' +`/positive/` +i+ `/`).remove().then(()=>{
      alert("Successfully Deleted");
    });
  }

}
