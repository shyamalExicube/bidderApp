import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase'

@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.page.html',
  styleUrls: ['./add-options.page.scss'],
})
export class AddOptionsPage implements OnInit {
  public positiveKey:any;
  public negativeKey:any


  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
  addPositive(){
    if(this.positiveKey == '' || this.positiveKey == undefined || this.positiveKey == null){
      alert("PositiveKey field can not be blanked");
    }else{
      // alert("successfully submitted");
      firebase.database().ref(`keywords/`+`positiveKewwords`).push({
        option:this.positiveKey
      });

    }
  }

  addNegative(){
    if(this.negativeKey == '' || this.negativeKey == undefined || this.negativeKey == null){
      alert("negativeKey field can not be blanked");
    }else{
      firebase.database().ref(`keywords/`+`negativeKewwords`).push({
        option:this.negativeKey
      });
    }
  }

}
