import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController, ModalController } from '@ionic/angular';
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
  public deleteItems:any;
  public index:any
  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(public navParam:NavParams,public modal:ModalController,public masterAction:MasterActions,
    public toastControl:AlertControllerService) { 

    this.masterAction.fetchMaster();
    let sub = this.masterdata$.subscribe((res)=>{
      if(res){ 
        this.totalData=[]; 
        this.totalData=res.entries;
      }
    });
    this.data=this.navParam.get('value');
    this.totalData[this.data.index].check=this.data.checked;
    console.log(this.newCheckedData);
        this.newCheckedData.push(this.data.index);
    console.log(this.newCheckedData);
  }

  addToDelete(i:any){
    if(this.totalData[i].check == true){
      this.totalData[i].check=false;
      var newIndex=this.newCheckedData.sort(function(a,b){return a-b})
      for(var k=newIndex.length-1; k>=0; k--){
          this.totalData.splice(newIndex[k],1)
      }
      // this.newCheckedData.splice(i,1);
      console.log(this.totalData[i]);
      // console.log(this.newCheckedData);
    }else{
      this.totalData[i].check=true;
      this.newCheckedData.push(i);
    }
    console.log(this.totalData);
  }

  ngOnInit() {
  }
  delete(){
    var removeFromIndex =this.newCheckedData.sort(function(a, b){return a - b});
    
    console.log(removeFromIndex.length);
    console.log(this.totalData.length)
    var cal = (this.totalData.length) - (this.newCheckedData.length)
    console.log(cal)
    alert(removeFromIndex)    
    
    for (var i = removeFromIndex.length -1; i >= 0; i--)
    this.totalData.splice(removeFromIndex[i],1);
       
        if(cal == this.totalData.length ){
          console.log(this.totalData);
          firebase.database().ref('/entries/').set(this.totalData).then(()=>{
            this.toastControl.openToast("Successfully profile  Deleted",1500);
             this.modal.dismiss();
             this.modal.dismiss({
              'result': true
              })
           });
        }
        
     }
     
    

}
