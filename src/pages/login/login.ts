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

  // Declare variables
  username:any;
  password:any;
  letIn:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }

  ionViewDidLoad() {
  }

  login() {
    /*
    Logs in an existing user if their credentials are correct. Creates a new user if username doesn't exist
     */
    console.log(this.storage.keys());
    let currentUser = new User(this.username, this.password);
    let w;

    // Get the password value corresponding to the given username
    // If undefined a new user will be created
    this.storage.get(this.username).then((val) =>{
      // Check if the password to the corresponding username is correct
      if (val == this.password){
        // Get existing user data
        console.log("password correct");
        this.storage.get(this.username+"Data").then((val) =>{
          console.log(val);
          if (!(val == null)){
            currentUser.data.getDataFromList(val.data);
          }
        });
        // Get the weight list from storage
        this.storage.get(this.username+"Weight").then((val) =>{
          console.log(val);
          if (val == null){
            w=[];
          }else{
            w = val;
          }
        });
        // Get the weight date list from storage
        this.storage.get(this.username+"WeightDate").then((val) =>{
          console.log(val);
          let wDates = val;
          if (wDates == null){
            wDates = [];
          }
          currentUser.setAllWeight(w,wDates);
        });
        // Gets the list of exercises from storage
        this.storage.get(this.username+"Exercises").then((val) =>{
          if (!(val == null)){
            currentUser.setAllExercises(val);
          }
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
    /*
    Stores the new users username and password
     */
    this.storage.set(this.username, this.password);
  }
}

