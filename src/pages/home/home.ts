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
  // Declare variables
  @ViewChild('totalWeight') canvas;
  currentUser:any;
  exercises:string[];
  chart:any;
  exercise:any;
  timeScale:any = 0;

  constructor(public navCtrl: NavController, private modal: ModalController, public navParams: NavParams) {
    // Get the users data from storage
    this.currentUser = navParams.data;
    this.exercises = this.currentUser.exercises;
  }

  openModal() {
    // Open the add exercise modal
    let currentUser = this.navParams.data;
    const myModel = this.modal.create('AddExercisePage', { currentUser: currentUser });
    myModel.present();
  }

  notify() {
    /*
    Updates the exericse weight graph every time the page is entered, loaded, or the timescale changes
     */
    if(this.currentUser.data.getExercise(this.exercise) == undefined){
      this.timeScale = 0;
      // If no data was added, then set to empty lists
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
        // Gets the list of date string from the user object to display on the chart
        labels: this.currentUser.data.getDate(this.exercise).slice(Math.floor(this.currentUser.data.getDate(this.exercise).length * this.timeScale/100), this.currentUser.data.getDate(this.exercise).length),
        datasets: [{
          label:"Total Weight",
          // Gets the list of weights from the user object
          data: this.currentUser.data.getExercise(this.exercise).slice(Math.floor(this.currentUser.data.getExercise(this.exercise).length * this.timeScale/100), this.currentUser.data.getExercise(this.exercise).length),
          backgroundColor:"red",
          fill:false,
        }]
      },
      options: {
        // Stops the animation from playing
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
