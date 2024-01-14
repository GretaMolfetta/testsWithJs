console.log('Hello World');

console.log(document.getElementById('message').innerHTML);

console.log('Hello World');
console.log("Hello World");
console.log(`Hello World`);

const username = 'Greta';

console.log(username);
let user = 'Luke Sky walker';
console.log(user);

user = 'Greta';
console.log(user);

let my_variable = 'This is a variable with let';
console.log(my_variable);


console.log(my_age);
var my_age = '43'
console.log(my_age);


const my_first_name = 'Greta';

const myLastName = 'Molfetta';

const my_name_12 = 'iosdjfsodf';

let x = 5;
x = 12;
console.log(x);

let y = x + 2;
console.log(y);
y = 'Ciao Ciao';
console.log(y);

let person;


person = 'Mario';


let miaStringa;

miaStringa = 'ciao';

miaStringa = 'arrivederci';


let my_fullname = my_first_name + myLastName

console.log('Greta' + 'Molfetta');
console.log(my_fullname);

console.log('1' + '1');
console.log('1' + 1);

let string = 'Qui';
let stringTwo = 'Qua';
console.log(
  `${string} Quo ${stringTwo}
  Andarono al mercato`
);



let somma = 4 + 4;
console.log(somma);

let sottr = somma - 3;

let divisione = somma / 2;


let molt = sottr * 2;



// chiediamo all'utente la sua etá
const user_age = prompt('What\'s your age');
console.log(user_age);

// salva in una variable l'anno attuale
const current_year = 2023
console.log(current_year);
// sottrarre all'anno attuale l'etá dell'utnte e salva in una variable
const result = current_year - Number(user_age) // 2023 - "43"
// loggo in console il risultato
console.log(result);

// stampo in pagina un messaggio per l'utente
const messageElement = document.getElementById('message')
console.log(messageElement);

messageElement.innerHTML = `Sei nato nel: ${result}`;

console.log(messageElement);


const this_user_name = prompt('Type your name');

console.log('Ciao ' + this_user_name);

document.getElementById('myname').innerHTML = `Ciao ${this_user_name}`