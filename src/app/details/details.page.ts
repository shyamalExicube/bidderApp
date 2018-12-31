import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public projectDetails:any

  constructor(public route:ActivatedRoute) { 
    let paramdata = this.route.snapshot.paramMap.get('id');
    if(paramdata != undefined){
      console.log(paramdata)
      console.log(JSON.parse(paramdata))
      this.projectDetails=JSON.parse(paramdata)
    }
    

  }

  ngOnInit() {
    // let dataaa = this.navparam.get('datan');
    // console.log(dataaa);
  }
  bid(){
    console.log("bidded");
  }

}
