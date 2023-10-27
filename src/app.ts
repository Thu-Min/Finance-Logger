import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
    
});

// Generics
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'mario', age: 20});
// let docTwo = addUID('hello');

console.log(docOne.name);

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'Thumin',
    data: { name: 'hello' },
}

console.log(docThree);

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['hello', 'world']
}

console.log(docFour);

// Enums
enum ListType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface List<T> {
    uid: number;
    listType: ListType;
    data: T;
}

const listOne: List<object> = {
    uid: 1,
    listType: ListType.BOOK,
    data: { title: 'name of the wind' }
}

const listTwo: List<object> = {
    uid: 10,
    listType: ListType.PERSON,
    data: { name: 'yoshi' }
}

console.log(listOne, listTwo);

// Tuples
let arr = ['ryu', 23, true];

let tup: [string, number, boolean] = ['ryu', 25, true];

let student: [string, number];
student = ['thumin', 2123];