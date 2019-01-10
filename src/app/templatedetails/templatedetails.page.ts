import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { MasterActions } from 'src/redux/actions/master_actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-templatedetails',
  templateUrl: './templatedetails.page.html',
  styleUrls: ['./templatedetails.page.scss'],
})
export class TemplatedetailsPage implements OnInit {

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;
  public totalData:any;
  public getid:any;
  public templates:any;
  public templateData:any;
  public template:any


  constructor(public masterAction:MasterActions,public route:ActivatedRoute) { 

    this.masterAction.fetchMaster();
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
        if(this.route.snapshot.paramMap.get('id') != undefined){
          let getid = this.route.snapshot.paramMap.get('id');
          console.log(this.templateData[getid]);
          this.template=this.templateData[getid]
        }
      }
    });
 
}

  ngOnInit() {
  }

}
