export class Habit {
    id: number;
    name: string;
    description: string;
    goal: number;
    current: number;
    deadline: Date;
    constructor(id: number, name: string, description: string, goal: number, current: number, deadline: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.goal = goal;
        this.current = current;
    }
}