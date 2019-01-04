import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MasterActions } from 'src/redux/actions/master_actions';
import * as firebase from 'firebase'
import { AlertControllerService } from '../alert-controller.service';
@Component({
  selector: 'app-addtemplate',
  templateUrl: './addtemplate.page.html',
  styleUrls: ['./addtemplate.page.scss'],
})
export class AddtemplatePage implements OnInit {
  public name:any;
  public description:any;
  public totalData:any;
  public tempalte:any;
  public templateData:any;
  public lastPosition:any
  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(
    public modalCtrl:ModalController,
    public masterAction:MasterActions,
    public toastControl:AlertControllerService
    ) { 

    this.masterAction.fetchMaster();
    let sub = this.masterdata$.subscribe((res)=>{
      if(res){ 
        console.log(res);  
        this.totalData=res.bid_template;
        this.templateData=[]
           for(let key in this.totalData){
             this.tempalte=this.totalData[key];
            this.totalData[key].tempKey=key;
            this.templateData.push(this.totalData[key])
           }
        console.log(this.totalData);
      }
    });
  }
  ngOnInit() {
  }
  addTemplate(){
    if(this.name == '' || this.name == undefined || this.name == null){
      this.toastControl.openToast("Name field can not be blanked",1500);
    }else if(this.description == '' || this.description == undefined || this.description == null){
      this.toastControl.openToast("Description field can not be blanked",1500);
    }else{
      let lastTempPosition = this.templateData.length-1
      let lastTempKey = this.templateData[lastTempPosition].tempKey;
      let splitres = lastTempKey.split("-")[1];
      console.log(splitres);
      let res = parseInt(splitres)+1
      if(res<10){var finalres = 'template-'+'0'+res}
      else{finalres = 'template-'+res}
  
      if(finalres){
        firebase.database().ref('bid_template/'+finalres).set({
          name:this.name,
          description:this.description
        }).then(()=>{
          this.modalCtrl.dismiss();
        })
      }
    }
  }
  close(){
    this.modalCtrl.dismiss();
  }


}
