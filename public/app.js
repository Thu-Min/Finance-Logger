// import { Invoice } from './classes/Invoice.js';
// import { ListTemplate } from './classes/ListTemplate.js';
// import { Payment } from './classes/Payment.js';
// const form = document.querySelector('.new-item-form');
// // inputs
// const type = document.querySelector('#type');
// const tofrom = document.querySelector('#tofrom');
// const details = document.querySelector('#details');
// const amount = document.querySelector('#amount');
// // list template instance
// const ul = document.querySelector('ul');
// const list = new ListTemplate(ul);
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let values;
//     values = [tofrom.value, details.value, amount.valueAsNumber];
//     let doc;
//     if (type.value === 'invoice') {
//         doc = new Invoice(...values);
//     }
//     else {
//         doc = new Payment(...values);
//     }
//     list.render(doc, type.value, 'end');
// });
// // Generics
// const addUID = (obj) => {
//     let uid = Math.floor(Math.random() * 100);
//     return Object.assign(Object.assign({}, obj), { uid });
// };
// let docOne = addUID({ name: 'mario', age: 20 });
// // let docTwo = addUID('hello');
// console.log(docOne.name);
// const docThree = {
//     uid: 1,
//     resourceName: 'Thumin',
//     data: { name: 'hello' },
// };
// console.log(docThree);
// const docFour = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['hello', 'world']
// };
// console.log(docFour);
// // Enums
// var ListType;
// (function (ListType) {
//     ListType[ListType["BOOK"] = 0] = "BOOK";
//     ListType[ListType["AUTHOR"] = 1] = "AUTHOR";
//     ListType[ListType["FILM"] = 2] = "FILM";
//     ListType[ListType["DIRECTOR"] = 3] = "DIRECTOR";
//     ListType[ListType["PERSON"] = 4] = "PERSON";
// })(ListType || (ListType = {}));
// const listOne = {
//     uid: 1,
//     listType: ListType.BOOK,
//     data: { title: 'name of the wind' }
// };
// const listTwo = {
//     uid: 10,
//     listType: ListType.PERSON,
//     data: { name: 'yoshi' }
// };
// console.log(listOne, listTwo);
// // Tuples
// let arr = ['ryu', 23, true];
// let tup = ['ryu', 25, true];
// let student;
// student = ['thumin', 2123];


// To calculate the arrival date based on the departure date and the approximate time duration in JavaScript, you can use the following code:

// ```javascript

// ```

// This code takes the departure date as a string in the format "MM/DD/YYYY" and the approximate time to arrive at the destination as a string. It then calculates the arrival date by converting the departure date to a JavaScript Date object, adding the total time duration in milliseconds, and creating a new Date object for the arrival time. Finally, it formats the arrival date back to the "MM/DD/YYYY" format and returns it.