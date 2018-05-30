import { Entry } from "./Entry";
import { LogweightPage } from "../pages/logweight/logweight";

export class Data {
    data = {};
    weight = [];

    constructor() {

    }

    getDataFromList(newData:any){
      for (let key in newData){
        this.data[key] = [];
        for (var i = 0; i < newData[key].length; i++){
          this.data[key][i] = newData[key][i];
        }
      }
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
      try{
        let retList = [];
        for (var i = 0; i < this.data[exercise].length; i++){
            retList.push(this.data[exercise][i][0]*this.data[exercise][i][1]*this.data[exercise][i][2]);
        }
        return retList;
      }catch{ }
      return undefined;
    }

    getDate(exercise:string){
      let dateList = [];
      for (var i = 0; i < this.data[exercise].length; i++){
        dateList.push(this.data[exercise][i][3]);
      }
      return dateList;
    }

  }
