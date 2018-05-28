import { Entry } from "./Entry";

export class Data {
    data = {};

    constructor(){

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

    getData(exercise:string){
      let dateList = [];
      for (var i = 0; i < this.data[exercise].length; i++){
        dateList.push(this.data[exercise][i][3]);
      }
      return dateList;
    }

  }
