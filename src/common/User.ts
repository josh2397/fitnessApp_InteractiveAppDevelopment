import { Entry } from '../common/Entry';
import { LoginPage } from "../pages/login/login";
import { Data } from "../common/Data";
import { Weight } from "../common/Weight";
import { Storage } from '@ionic/storage';

export class User {
  username:string;
  password:string;
  data:Data;
  exercises: string[];
  weight:number[];
  weightEntryDate:string[];
  constructor(username:string, password:string){
    this.username = username;
    this.password = password;
    this.data = new Data();
    this.exercises = ["Bench","Deadlift","Pull Up","Press","Squat"];
    this.weight = [];
    this.weightEntryDate = [];
    console.log(this.username, this.password);
  }

  setAllExercises(exercises:string[]){
    this.exercises = exercises;
  }

  setAllWeight(w:any, wD:any){
    this.weight = w;
    this.weightEntryDate = wD;
  }

  getNewExercise(exercise:string){
    this.exercises.push(exercise);
  }

  getNewEntry(entry:Entry){
    this.data.addEntry(entry);
  }

  addNewWeight(weightEntry:number) {

    this.weight.push(weightEntry);
    console.log("Addnewweight:", this.weight);
  }

  addNewWeightDate(weightEntryDate:string) {
    this.weightEntryDate.push(weightEntryDate);
  }

  getWeightDate(){
    let weightDateList = [];
    for (var i = 0; i < this.weightEntryDate.length; i++){
      weightDateList.push(this.weightEntryDate[i])
    }
    return weightDateList;
  }

  getWeight() {
    let weightList = []
    for (var i = 0; i < this.weight.length; i++){
      weightList.push(this.weight[i]);
    }
    return weightList;
  }

}
