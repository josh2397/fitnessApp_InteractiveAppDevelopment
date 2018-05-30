import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage"
import { Entry } from '../../common/Entry';


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
  exercises:string[];

  // Initialises workout values
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.sets = 1;
    this.reps = 1;
    this.weight = 0;
    // Gets user from navparams
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

  // Checks weight doesn't go below 0
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

  // Changes the direction of incrementation for weight
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
    // Don't save if no exercise selected
    if (this.exercise == undefined){
      return;
    }
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    // formats the current date
    var ftoday = mm + '/' + dd + '/' + yyyy;
    for (var i = 0; i < 10; i++){
      this.weight = Math.random() * (100-10) + 10;
      dd += 1;
      ftoday = mm + '/' + dd + '/' + yyyy;
      // Add the the workout entry to the data
      this.currentUser.getNewEntry(new Entry(this.exercise, this.sets, this.reps, this.weight, ftoday));
    }
    // Store the data in ionic storage
    this.currentUser.getNewEntry(new Entry(this.exercise,this.sets,this.reps,this.weight, ftoday));
    this.storage.set(this.currentUser.username+"Data",this.currentUser.data);
    this.storage.set(this.currentUser.username+"Exercises",this.currentUser.exercises);
  }



  ionViewDidLoad() {
  }

}
