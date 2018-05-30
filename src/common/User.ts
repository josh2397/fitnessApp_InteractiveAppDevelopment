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
  // deleted the exercise from the users exercsise list
  delExercise(ex:string){
    this.exercises.splice(this.exercises.indexOf(ex),1);
  }
  // Edit the selected exercise in the list
  rename(newS:string, oldS:string){
    this.exercises[this.exercises.indexOf(newS)] = oldS;
  }
  // Gets the default exercise list
  setAllExercises(exercises:string[]){
    this.exercises = exercises;
  }
  // Gets the weight list from storage
  setAllWeight(w:any, wD:any){
    this.weight = w;
    this.weightEntryDate = wD;
  }
  // Adds the new exercise to the list
  getNewExercise(exercise:string){
    this.exercises.push(exercise);
  }
  // Adds the new entry
  getNewEntry(entry:Entry){
    this.data.addEntry(entry);
  }
  // Adds the new weight to the weight list
  addNewWeight(weightEntry:number) {

    this.weight.push(weightEntry);
    console.log("Addnewweight:", this.weight);
  }
  //Adds new weight date to the list
  addNewWeightDate(weightEntryDate:string) {
    this.weightEntryDate.push(weightEntryDate);
  }
  // Weight Date labels list
  getWeightDate(){
    let weightDateList = [];
    for (var i = 0; i < this.weightEntryDate.length; i++){
      weightDateList.push(this.weightEntryDate[i])
    }
    return weightDateList;
  }
  // Get the weight list
  getWeight() {
    let weightList = []
    for (var i = 0; i < this.weight.length; i++){
      weightList.push(this.weight[i]);
    }
    return weightList;
  }

}
