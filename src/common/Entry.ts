export class Entry {
    exercise:string;
    sets:number;
    reps:number;
    weight:number;
    
    constructor(exercise: string, sets: number, reps: number, weight: number){
        this.exercise = exercise;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
    }
}
