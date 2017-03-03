export interface Job {
    name: string;
    id: string;
    description: string;
}

export class NewColonist {
    name: string;
    id: string;
    age: string;
    job_id: string;
    constructor(name, age, job_id) {
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
}

export interface Colonist {
    name: string;
    id: string;
    age: string;
    job: string;
}

export interface Alien {
    id: number;
    type: string;
    description: string;
    submitted_by: string;
}

export class NewEncounter {
    date: number;
    atype: string;
    action: string;
    colonist_id: number;
    constructor(date, atype, action, colonist_id) {
        this.date = date;
        this.atype = atype;
        this.action = action;
        this.colonist_id = colonist_id;
}
}

export interface Encounter {
    id: number;
    date: string;
    atype: string;
    action: string;
    colonist_id: string;
}