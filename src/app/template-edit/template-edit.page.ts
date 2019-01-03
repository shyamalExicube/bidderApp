import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import * as firebase from 'firebase'
import { AlertControllerService } from '../alert-controller.service';

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.page.html',
  styleUrls: ['./template-edit.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TemplateEditPage implements OnInit {
  public desc:any;
  public templateData:any

  constructor(
    public navParams:NavParams,
    public modalCtrl:ModalController,
    public toastControl:AlertControllerService
    ) {
    if(this.navParams.get('value')){
      this.templateData=this.navParams.get('value')
        console.log(this.templateData);
        this.desc=this.templateData.description
    }

   }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
  update(){
    if(this.desc == '' || this.desc == undefined || this.desc == null){
      this.toastControl.openToast("Yhis field can not be blanked",1500)

    }else{
      firebase.database().ref(`/bid_template/` +this.templateData.id+ `/`).update({
        description:this.desc
      }).then(()=>{
        this.toastControl.openToast("Successfully Updated",1500);
        this.modalCtrl.dismiss();
      })
    }
  }

}
