import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  demo: string = "camera"
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  addPositive(){
   console.log("positive keyWord");
  }
addNegative(){
   console.log("Negative keyWord");
}

}
