import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController } from '@ionic/angular';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MasterActions } from 'src/redux/actions/master_actions';
import { AlertControllerService } from '../alert-controller.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.page.html',
  styleUrls: ['./delete-project.page.scss'],
})
export class DeleteProjectPage implements OnInit {
  public totalData:any;
  public id:any;
  public data:any;
  public newCheckedData:any=[]
  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(public navParam:NavParams,public masterAction:MasterActions,
    public toastControl:AlertControllerService) { 

    this.masterAction.fetchMaster();
    let sub = this.masterdata$.subscribe((res)=>{
      if(res){ 
        this.totalData=[];
        console.log(res);  
        this.totalData=res.entries;
        console.log(this.totalData);
      }
    });
    this.data=this.navParam.get('value');
    console.log(this.data.index);
    console.log(this.totalData[this.data.index]);
    console.log();
    this.totalData[this.data.index].check=this.data.checked
    this.newCheckedData=this.totalData;
    console.log(this.newCheckedData);
  }

  addToDelete(i:any){
    console.log(i);
    this.newCheckedData[i].check=true;
    console.log(this.newCheckedData);
  }

  ngOnInit() {
  }
  delete(){
    console.log(this.newCheckedData);
    for(let i=0;i<this.newCheckedData.length;i++){
      console.log(this.newCheckedData[i]);
      if(this.newCheckedData[i].check == true){
        console.log(i);
        this.newCheckedData.splice(i,1);
        firebase.database().ref('/entries/').set(this.newCheckedData).then(()=>{
          this.toastControl.openToast("Successfully profile  Deleted",1500);
         });
      } 
    }

  }

}
