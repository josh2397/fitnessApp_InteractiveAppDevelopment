import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username:any;

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.setRoot(HomePage, {
      username: this.username
    });
  }

}
