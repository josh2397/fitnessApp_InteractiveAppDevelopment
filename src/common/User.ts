import { Entry } from '../common/Entry';
import { LoginPage } from "../pages/login/login";
import { Data } from "../common/Data";

export class User {
  username:string;
  password:string;
  data:Data;
  exercises: string[];
  constructor(username:string, password:string){
    this.username = username;
    this.password = password;
    this.data = new Data();
    this.exercises = ["Bench","Deadlift","Pull Up","Press","Squat"];
    console.log(this.username, this.password);
  }

  getNewExercise(exercise:string){
    this.exercises.push(exercise);
  }

  getNewEntry(entry:Entry){
    this.data.addEntry(entry);
  }
}
