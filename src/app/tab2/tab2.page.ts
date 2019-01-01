import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddOptionsPage } from '../add-options/add-options.page';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { KeywordActions } from 'src/redux/actions/keywords_actions';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  demo: string = "camera"
  public keywordData:any

  @select(['KeywordData', 'keyworddata'])
  readonly keyworddata$: Observable<any>;

  constructor(public modalController: ModalController, public keywordActions:KeywordActions) {
    this.keywordActions.fetchKeyword();
    let sub = this.keyworddata$.subscribe((res)=>{
     if(res){ 
       console.log(res);
       this.keywordData=res;
     }
   });

  }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddOptionsPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
