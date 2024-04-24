export class Habit {
    id: number;
    name: string;
    description: string;
    goal: number;
    current: number;
    deadline: Date;
    picture: string;
    category: string;
    constructor(id: number, name: string, description: string, goal: number, current: number, deadline: Date, picture: string, category: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.goal = goal;
        this.current = current;
        this.deadline = deadline;
        this.picture = picture;
        this.category = category;
    }
}