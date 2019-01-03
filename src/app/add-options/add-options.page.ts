import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase'
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { KeywordActions } from 'src/redux/actions/keywords_actions';
import { MasterActions } from 'src/redux/actions/master_actions';
import { AlertControllerService } from '../alert-controller.service';

@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.page.html',
  styleUrls: ['./add-options.page.scss'],
})
export class AddOptionsPage implements OnInit {
  public positiveKey:any;
  public negativeKey:any;
  public keywords:any;
  public negativeKeys:any;
  public negativeInputs:any=[]
  public myData:any;
  public positiveKeys:any;
  public positiveInputs:any=[];
  public input:boolean=true
  public restaurants:any
  public options:any;
  public enterKeyword:any
  public selectSegment:any

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;


  constructor(public modalCtrl:ModalController,public keywordActions:KeywordActions,
    public masterActions:MasterActions,
    public toastControl:AlertControllerService,
    public navParams: NavParams) { 
    this.masterActions.fetchMaster();
    let sub = this.masterdata$.subscribe((res)=>{
     if(res){ 
       console.log(res);
       this.keywords=res.keywords;   
     }
   });

   this.restaurants=[
    "Positive",
    "Negative",
  ]
  this.selectOptn();

  if(this.navParams.get('value')){
    this.selectSegment=this.navParams.get('value');
    console.log(this.selectSegment);
  }
  }
  selectOptn(){
    console.log(this.options);
  }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
  addPositive(){
    if(this.positiveKey == '' || this.positiveKey == undefined || this.positiveKey == null){
      this.toastControl.openToast("PositiveKey field can not be blanked",1500)
    }else{
      var found = true;
      let positiveKeys= this.keywords.positive
      console.log(positiveKeys);
      console.log(positiveKeys.length);
      for(var i=0;i<positiveKeys.length;i++){
        if(positiveKeys[i] == this.positiveKey){
           found =false;      
            break;
        }else{
            found= true;
        }
      }
      if(found){
        firebase.database().ref(`keywords/positive/`+ positiveKeys.length).set(this.positiveKey).then((res)=>{
           this.toastControl.openToast("Added positive key",1500);
           this.modalCtrl.dismiss();
        })
      }else{
        this.toastControl.openToast("Already added",1500);
      }
      
    }
  }

  addNegative(){
    if(this.negativeKey == '' || this.negativeKey == undefined || this.negativeKey == null){
      this.toastControl.openToast("negativeKey field can not be blanked",1500);
    }else{
      var found = true;
      let negativeKeys= this.keywords.negative
      console.log(negativeKeys);
      console.log(negativeKeys.length);
      for(var i=0;i<negativeKeys.length;i++){
        if(negativeKeys[i] == this.negativeKey){
           found =false;      
            break;
        }else{
            found= true;
        }
      }
      if(found){
        firebase.database().ref(`keywords/negative/`+ negativeKeys.length).set(this.negativeKey).then((res)=>{
           this.toastControl.openToast("Added negative key",1500);
           this.modalCtrl.dismiss();
        })
      }else{
        this.toastControl.openToast("already added",1500);
      }
      
    }
  }

  // submitKeyword(){
  //   if(this.options == '' || this.options == undefined || this.options == null){
  //     this.toastControl.openToast("select an option first",1500);
  //   }else if(this.enterKeyword == '' || this.enterKeyword == undefined || this.enterKeyword == null){
  //     this.toastControl.openToast("This field can not be blanked",1500);
  //   }else if(this.options == "Positive"){

  //     var found = true;
  //     let positiveKeys= this.keywords.positive
  //     console.log(positiveKeys);
  //     console.log(positiveKeys.length);
  //     for(var i=0;i<positiveKeys.length;i++){
  //       if(positiveKeys[i] == this.enterKeyword){
  //          found =false;      
  //           break;
  //       }else{
  //           found= true;
  //       }
  //     }
  //     if(found){
  //       firebase.database().ref(`keywords/positive/`+ positiveKeys.length).set(this.enterKeyword).then((res)=>{
  //          this.toastControl.openToast("Added positive key",1500);
  //          this.modalCtrl.dismiss();
  //       })
  //     }else{
  //       this.toastControl.openToast("Already added",1500);
  //     }
  //   }else if(this.options == "Negative"){
  //     var found = true;
  //     let negativeKeys= this.keywords.negative
  //     console.log(negativeKeys);
  //     console.log(negativeKeys.length);
  //     for(var i=0;i<negativeKeys.length;i++){
  //       if(negativeKeys[i] == this.enterKeyword){
  //          found =false;      
  //           break;
  //       }else{
  //           found= true;
  //       }
  //     }
  //     if(found){
  //       firebase.database().ref(`keywords/negative/`+ negativeKeys.length).set(this.enterKeyword).then((res)=>{
  //          this.toastControl.openToast("Added negative key",1500);
  //          this.modalCtrl.dismiss();
  //       })
  //     }else{
  //       this.toastControl.openToast("already added",1500);
  //     }

  //   }
  // }
}
