import { Component, ViewChild} from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { User } from '../../common/User';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('totalWeight') canvas;
  currentUser:any;
  exercises:string[];
  chart:any;
  exercise:any;
  timeScale:any = 0;

  constructor(public navCtrl: NavController, private modal: ModalController, public navParams: NavParams) {
    this.currentUser = navParams.data;
    this.exercises = this.currentUser.exercises;
  }

  openModal() {
    let currentUser = this.navParams.data;
    const myModel = this.modal.create('AddExercisePage', { currentUser: currentUser });
    myModel.present();
  }

  notify() {
    if(this.currentUser.data.getExercise(this.exercise) == undefined){
      this.timeScale = 0;
      this.chart = new Chart(this.canvas.nativeElement, {
        labels: [1, 2, 3, 4],
        series: [[]]
      });
      this.chart.update();
      return;
    }
    this.chart = new Chart(this.canvas.nativeElement, {
      type:'line',
      data: {
        labels: this.currentUser.data.getDate(this.exercise).slice(Math.floor(this.currentUser.data.getDate(this.exercise).length * this.timeScale/100), this.currentUser.data.getDate(this.exercise).length),
        datasets: [{
          label:"Total Weight",
          data: this.currentUser.data.getExercise(this.exercise).slice(Math.floor(this.currentUser.data.getExercise(this.exercise).length * this.timeScale/100), this.currentUser.data.getExercise(this.exercise).length),
          backgroundColor:"red",
          fill:false,
        }]
      },
      options: {
        animation: {
          duration: 10
        }
      }
    });
    this.chart.update();

  }

  ionViewDidEnter() {
    this.timeScale = 0;
    this.notify();
  }

  // logout(){
  //   this.navCtrl.setRoot(LoginPage);
  // }

}
