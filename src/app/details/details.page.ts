import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterActions } from 'src/redux/actions/master_actions';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public projectDetails:any;
  public totalData:any=[];
  public paramdata:any;
  public sub:any;
  public image:boolean=true
  description:any;

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(public route:ActivatedRoute,
    public masterAction:MasterActions,private sanitizer: DomSanitizer) { 
      this.masterAction.fetchMaster();
      this.sub = this.masterdata$.subscribe((res)=>{
        if(res){ 
          let result = res;
          if(this.route.snapshot.paramMap.get('id') != undefined){
            let getid = this.route.snapshot.paramMap.get('id');
            // let newdata = result.entries[getid];
            this.totalData=result.entries[getid];
            // this.totalData=this.sanitizer.bypassSecurityTrustHtml(result.entries[getid]);
            this.description = this.sanitizer.bypassSecurityTrustHtml(this.totalData.description);
            console.log(this.totalData);
          }else{
            console.log("No data found");
          }
        }else{
          console.log("No data found")
        }
      });

  }

  ngOnInit() {
   
  }
  bid(){
    console.log("bidded");
  }

}
