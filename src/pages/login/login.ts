import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../common/User';
import { UserHandler } from '../../common/UserHandler';
import { WorkoutPage } from '../workout/workout';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:any;
  password:any;
  letIn:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    
  }

  ionViewDidLoad() {
  }

  login() {
    let currentUser = new User(this.username, this.password);
    let w;
    this.storage.get(this.username).then((val) =>{
      if (val == this.password){
        //get existing user
        console.log("password correct");
        this.storage.get(this.username+"Data").then((val) =>{
          console.log(val.data);
          currentUser.data.getDataFromList(val.data);
        });
        this.storage.get(this.username+"Weight").then((val) =>{
          w = val;
        });
        this.storage.get(this.username+"WeightDate").then((val) =>{
          currentUser.setAllWeight(w,val);
        });
      }else if (val == undefined){
        //create new user
        console.log("new user");
        this.storeUser();
      }else{
        alert("wrong password");
        return;
        //wrong password
      }
      this.navCtrl.push(TabsPage, {
        currentUser: currentUser
      });
    })
      
    
  }

  storeUser(){
    this.storage.set(this.username, this.password);
  }
}

