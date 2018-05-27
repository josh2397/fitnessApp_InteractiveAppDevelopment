import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../common/User';
import { WorkoutPage } from '../workout/workout';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let user = new User(this.username, this.password);
    this.storage.set("user",JSON.parse(JSON.stringify(user)));

    this.navCtrl.push(TabsPage, {
    });
  }
}

