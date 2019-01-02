import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase'
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { KeywordActions } from 'src/redux/actions/keywords_actions';

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

  @select(['keywordData', 'keyworddata'])
  readonly keyworddata$: Observable<any>;


  constructor(public modalCtrl:ModalController,public keywordActions:KeywordActions) { 
    // this.keywordActions.fetchKeyword();
    let sub = this.keyworddata$.subscribe((res)=>{
     if(res){ 
       this.keywords=res;   
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
      firebase.database().ref(`keywords/`+`positiveKewwords`).push({
        option:this.positiveKey
      }).then(()=>{
        alert("Successfully added");
        this.positiveKey=null;
      }).then(()=>{
        this.modalCtrl.dismiss();
      });
    }
  }

  addNegative(){
    if(this.negativeKey == '' || this.negativeKey == undefined || this.negativeKey == null){
      alert("negativeKey field can not be blanked");
    }else{
      firebase.database().ref(`keywords/`+`negativeKewwords`).push({
        option:this.negativeKey
      }).then(()=>{
        alert("Successfully added");
        this.negativeKey=null;
      });
    }
  }

}
