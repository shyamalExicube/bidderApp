import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MasterActions } from 'src/redux/actions/master_actions';

@Component({
  selector: 'app-addtemplate',
  templateUrl: './addtemplate.page.html',
  styleUrls: ['./addtemplate.page.scss'],
})
export class AddtemplatePage implements OnInit {
  public name:any;
  public desc:any;
  public totalData:any;
  public tempalte:any
  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(
    public modalCtrl:ModalController,
    public masterAction:MasterActions
    ) { 

    this.masterAction.fetchMaster();
    let sub = this.masterdata$.subscribe((res)=>{
      if(res){ 
        console.log(res);  
        this.totalData=res.bid_template;
           for(let key in this.totalData){
             this.tempalte=this.totalData[key];
           }
        console.log(this.totalData);
      }
    });
  }
  ngOnInit() {
  }
  addTemplate(){
    console.log(this.name);
    console.log(this.desc); 
    firebase.database().ref(`/modalCtrl/`)

  }
  close(){
    this.modalCtrl.dismiss();
  }


}
