import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MasterActions } from 'src/redux/actions/master_actions';
import * as firebase from 'firebase'
import { ModalController } from '@ionic/angular';
import { TemplateEditPage } from '../template-edit/template-edit.page';
import { AddtemplatePage } from '../addtemplate/addtemplate.page';
import { NavController } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public templates:any;
  public templateData:any;
  public description:any;
  public name:any

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(
    public masterActions:MasterActions,
    public modalController:ModalController,
    public nav:NavController
    ) { 
    this.masterActions.fetchMaster();
    let sub = this.masterdata$.subscribe((res)=>{
     if(res){ 
       console.log(res);
       this.templates=res.bid_template;
       console.log(this.templates);
       this.templateData=[];
       for(let key in this.templates){
         console.log(this.templates[key]);
         this.templates[key].id=key;
         this.templateData.push(this.templates[key])
          console.log(this.templateData);
       }
      //  this.template1=this.templates.template-01
      //  this.template2=this.templates.template-02
         // console.log(this.myFav);
     }
   });

  }
  async edit(data:any){
    console.log(data);

    const modal = await this.modalController.create({
      component: TemplateEditPage,
      componentProps: { value: data },
      cssClass : "modalPage"
    });
    return await modal.present();
  }

  ngOnInit() {
  }
  async presentModal(){
    const modal = await this.modalController.create({
      component: AddtemplatePage,
      // componentProps: { value: data },
      cssClass : "modalPage"
    });
    return await modal.present();
  }
  goDetails(i:any){
    this.nav.navigateForward('/templatedetails/'+i);

  }
}
