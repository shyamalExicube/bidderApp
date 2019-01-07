import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterActions } from 'src/redux/actions/master_actions';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

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
  public link:any;

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};

  @select(['masterData', 'masterdata'])
  readonly masterdata$: Observable<any>;

  constructor(public route:ActivatedRoute,
    public masterAction:MasterActions,private sanitizer: DomSanitizer,
    private theInAppBrowser: InAppBrowser
    ) { 
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
  seeDetails(){
    console.log();
    this.link=this.totalData.link;
    let target = "_self";
    this.theInAppBrowser.create(this.link,target,this.options);
  }
}
