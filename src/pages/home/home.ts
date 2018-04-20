import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modal: ModalController) {

  }

  openModal() {
    const myModel = this.modal.create('AddExercisePage')
    myModel.present()
  }

}
