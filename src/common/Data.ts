import { Entry } from "./Entry";
import { LogweightPage } from "../pages/logweight/logweight";

export class Data {
    data = {};
    weight = [];

    constructor() {

    }
    addWeight(weightEntry:number){
      this.weight.push(weightEntry)
    }

    getWeight(){
      return this.weight;
    }
    addEntry(entry:Entry){
        if (this.data[entry.exercise] == null){
            this.data[entry.exercise] = [];
        }
        this.data[entry.exercise].push([entry.weight, entry.sets, entry.reps, entry.date]);
        console.log(this.data);
    }

    getExercise(exercise:string){
        let retList = [];
        for (var i = 0; i < this.data[exercise].length; i++){
            retList.push(this.data[exercise][i][0]*this.data[exercise][i][1]*this.data[exercise][i][2]);
        }
        return retList;
    }

    getDate(exercise:string){
      let dateList = [];
      for (var i = 0; i < this.data[exercise].length; i++){
        dateList.push(this.data[exercise][i][3]);
      }
      return dateList;
    }

  }
