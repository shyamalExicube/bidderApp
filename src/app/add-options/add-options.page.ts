import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase'
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { KeywordActions } from 'src/redux/actions/keywords_actions';
import { MasterActions } from 'src/redux/actions/master_actions';

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

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;


  constructor(public modalCtrl:ModalController,public keywordActions:KeywordActions,
    public masterActions:MasterActions) { 
    this.masterActions.fetchMaster();
    let sub = this.masterdata$.subscribe((res)=>{
     if(res){ 
       console.log(res);
       this.keywords=res.keywords;   
     }
   });

  }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
  addPositive(){
    if(this.positiveKey == '' || this.positiveKey == undefined || this.positiveKey == null){
      alert("PositiveKey field can not be blanked");
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
        // alert("found");
        firebase.database().ref(`keywords/positive/`+ positiveKeys.length).set(this.positiveKey).then((res)=>{
           alert("added positive key");
        })
      }else{
        alert("already added");
      }
      
    }
  }

  addNegative(){
    if(this.negativeKey == '' || this.negativeKey == undefined || this.negativeKey == null){
      alert("negativeKey field can not be blanked");
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
        // alert("found");
        firebase.database().ref(`keywords/negative/`+ negativeKeys.length).set(this.negativeKey).then((res)=>{
           alert("added negative key");
        })
      }else{
        alert("already added");
      }
      
    }
  }

}
