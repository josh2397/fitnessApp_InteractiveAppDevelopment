import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage"
import { Entry } from '../../common/Entry';
import { LoginPage } from '../login/login';
import { User } from '../../common/User';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})
export class WorkoutPage {
  sets:number;
  reps:number;
  weight:number = 0;
  exercise:any;
  wDir:any=true;
  dirStr:string='+';
  currentUser:any;
  //STORE THESE IN THE USER OBJECT AND MAKE THIS LIST IN CONSTRUCTOR
  exercises:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.sets = 1;
    this.reps = 1;
    this.weight = 0;
    this.currentUser = navParams.data;
    this.exercises = this.currentUser.exercises;
  }

  incSets(){
    this.sets ++;
  }

  decSets(){
    if (this.sets == 1){
      return;
    }
    this.sets --;
  }

  incReps(){
    this.reps ++;
  }

  decReps(){
    if (this.reps == 1){
      return;
    }
    this.reps --;
  }

  incWeight(value){
    if (this.wDir){
      this.weight += value;
    }else{
      this.weight -= value;
      if (this.weight < 0){
        this.weight = 0
      }
    }
  }

  weightDir(value){
    if (value == this.wDir){
      if (value){
        this.weight ++;
      }else if(this.weight > 0){
        this.weight --;
      }
    }
    if (value){
      this.dirStr = '+'
    }else{
      this.dirStr = '-'
    }
    this.wDir = value;
  }

  clearWeight(){
    this.weight = 1;
    this.sets = 1;
    this.reps = 1;
    this.wDir = true;
    this.dirStr = '+'
  }

  save(){
    if (this.exercise == undefined){
      return;
    }
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    var ftoday = mm + '/' + dd + '/' + yyyy;
    for (var i = 0; i < 10; i++){
      this.weight = Math.random() * (100-10) + 10;
      dd += 1;
      ftoday = mm + '/' + dd + '/' + yyyy;
      this.currentUser.getNewEntry(new Entry(this.exercise, this.sets, this.reps, this.weight, ftoday));
    }
    this.currentUser.getNewEntry(new Entry(this.exercise,this.sets,this.reps,this.weight, ftoday));
    this.storage.set(this.currentUser.username+"Data",this.currentUser.data);
    this.storage.set(this.currentUser.username+"Exercises",this.currentUser.exercises);
  }



  ionViewDidLoad() {
  }

}
