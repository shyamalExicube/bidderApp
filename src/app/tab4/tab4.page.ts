import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MasterActions } from 'src/redux/actions/master_actions';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public templates:any;
  public template1:any;
  public template2:any;
  public templateData:any=[]

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(public masterActions:MasterActions) { 

    this.masterActions.fetchMaster();
    let sub = this.masterdata$.subscribe((res)=>{
     if(res){ 
       console.log(res);
       this.templates=res.bid_template;
       console.log(this.templates);
       for(let key in this.templates){
         console.log(this.templates[key]);
         this.templateData.push(this.templates[key])
          console.log(this.templateData);
       }
      //  this.template1=this.templates.template-01
      //  this.template2=this.templates.template-02
         // console.log(this.myFav);
     }
   });

  }

  ngOnInit() {
  }

}
