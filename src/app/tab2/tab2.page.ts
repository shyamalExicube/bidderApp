import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddOptionsPage } from '../add-options/add-options.page';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { KeywordActions } from 'src/redux/actions/keywords_actions';
import * as firebase from 'firebase'
import { MasterActions } from 'src/redux/actions/master_actions';
import { AlertControllerService } from '../alert-controller.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  demo: string = "Positive"
  public keywords:any;
  public negativeKeys:any;
  public negativeInputs:any=[]
  public myData:any;
  public positiveKeys:any;
  public positiveInputs:any=[]
  public totalData:any
  public positivekeywords:any
  public negativekeywords:any
  // public segmentValue:any


  @select(['keywordData', 'keyworddata'])
  readonly keyworddata$: Observable<any>;

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(
    public modalController: ModalController,
    public keywordActions:KeywordActions,
    public masterAction:MasterActions,
    public toastControl:AlertControllerService) {
      console.log(this.demo)

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
    console.log(ev.detail.value);
    this.demo=ev.detail.value
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddOptionsPage,
      componentProps: {value:this.demo}
    });
    return await modal.present();
  }
  deleteNegKey(i){
    console.log(this.negativeInputs[i]);
    this.negativekeywords.splice(i,1);
    firebase.database().ref(`/keywords/negative/`).set(this.negativekeywords).then(()=>{
        this.toastControl.openToast("Successfully Negative Keyword Deleted",1500);
      });
  }
  deletePosKey(i){
    console.log(i);
    this.positivekeywords.splice(i,1)
    console.log(this.positiveInputs[i]);
    firebase.database().ref('/keywords/positive/').set(this.positivekeywords).then(()=>{
      this.toastControl.openToast("Successfully Positive Keyword Deleted",1500);
    });
  }
}
