import { Entry } from "./Entry";

export class Data {
    data = {};

    constructor(){

    }

    addEntry(entry:Entry){
        if (this.data[entry.exercise] == null){
            this.data[entry.exercise] = [];
        }
        this.data[entry.exercise].push([entry.weight, entry.sets, entry.reps]);
        console.log(this.data);
    }
  
  }