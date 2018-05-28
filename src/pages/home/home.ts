import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private modal: ModalController, public navParams: NavParams) {
    
  }

  openModal() {
    let currentUser = this.navParams.data;
    const myModel = this.modal.create('AddExercisePage', { currentUser: currentUser });
    myModel.present();
  }

}
