
import Person, { Gender } from "./entities/person";

import Book from "./entities/book";

import Periodical from "./entities/periodical";

let person1 = new Person('Rick Riordan', new Date('1964-06-05T00:00:00'), Gender.Male)
let person2 = new Person('C.S. Lewis', new Date('1898-11-29T00:00:00'), Gender.Male)
let person3 = new Person('Victoria Aveyard', new Date('1990-07-27T00:00:00'), Gender.Female)

let book1 = new Book('Herois do Olimpo', 'A Casa de Hades', new Date('2013-10-08T00:00:00'), person1)
let book2 = new Book('As Cronicas de Narnia', 'A Caldeira de Prata', new Date('1953-09-07T00:00:00'), person2)
let book3 = new Book('A Rainha Vermelha', 'Coroa Cruel', new Date('2015-02-10T00:00:00'), person3)

let periodical1 = new Periodical(9788565765923, 8327, 5293, 'Saraiva', 'ISTO É',  new Date('2020-11-22T00:00:00'), person1)
let periodical2 = new Periodical(6028565283643, 9384, 4839, 'Saraiva', 'ISTO É',  new Date('2020-11-22T00:00:00'), person2)
let periodical3 = new Periodical(8362565760353, 7397, 3774, 'Saraiva', 'ISTO É',  new Date('2020-11-22T00:00:00'), person3)

console.log(person1)
console.log(book1)
console.log(periodical1)

console.log(person2)

console.log(book2)
console.log(periodical2)

console.log(person3)
console.log(book3)
console.log(periodical3)