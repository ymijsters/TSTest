let userName = 'Max';

userName = 'Max';

let userAge = 34;

let isValid = true;

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
};

let user: User = {
    name: "Yannick",
    age: 28,
    isAdmin: true,
    id: 200,
}

let hobbies: string[];

hobbies = ["Sports", "Cooking", "Reading"];

function add(a: number, b: number): number {
    const result = a + b;
    return result;
}

add(2,3)

type AddFn = (a: number, b: number) => number
type CalcInput = {
    a: number;
    b: number
    fn: AddFn
}

let calc: CalcInput = {
    a: 1,
    b: 1,
    fn: (a: number, b:number) => {return a + b}
}

interface Credentials {
    password: string;
    email: string
};

let creds: Credentials;

creds = {
    password: "password",
    email: "email"
}

function calculate(a: number, b: number, fnCalc: AddFn) {
    fnCalc(a, b)
}

calculate(1, 2, add)

let userType: 'admin' | 'user' | 'editor';

userType = 'admin';

//Generic Types (Type for an object with a Type that can be defined in detail later)
type DataStorage<T> = {
    storage: T[]
    add: (data: T) => void
};

let dataStorage: DataStorage<string>;

dataStorage = {
    storage: ['test', 'test'],
    add(data: string){
        this.storage.push(data);
    }
}

function merge<T, U>(a: T, b: U) {
    return{
        ...a,
        ...b
    };
}

merge<string, string>("test", "tester");