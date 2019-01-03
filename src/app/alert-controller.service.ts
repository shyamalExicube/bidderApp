import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertControllerService {
  constructor(
    public http: HttpClient,
    private toastCtrl: ToastController
    ) {}

    async openToast(message,time){
    let toast =await this.toastCtrl.create({
      message: message,
      duration: time?time:1500,
      position: 'bottom'
    });
    toast.present();
  }

}
