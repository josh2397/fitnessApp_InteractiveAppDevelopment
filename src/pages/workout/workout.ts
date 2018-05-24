import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage"
import { Entry } from '../../common/Entry';


/**
 * Generated class for the WorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sets = 1;
    this.reps = 1;
    this.weight = 0;
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
    this.weight = 0;
    this.wDir = true;
    this.dirStr = '+'
  }

  save(){
    if (this.exercise == undefined){
      return;
    }
    let entry = new Entry(this.exercise, this.sets, this.reps, this.weight);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
  }

}
