export class Entry {
    exercise:string;
    sets:number;
    reps:number;
    weight:number;
    date:string;
    constructor(exercise: string, sets: number, reps: number, weight: number, day: string){
        this.exercise = exercise;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.date = day;
    }
}
