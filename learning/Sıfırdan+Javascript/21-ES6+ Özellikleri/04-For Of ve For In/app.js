const person = {
    name: 'Ken Den',
    age: 29,
    salary: 9000,
};

const langs = ['Python', 'Java', 'C++', 'Php'];

const name = 'Ken';

// For In -- array and object- based index
// Object
// for(let prop in person) {
//     console.log(prop,person[prop]);

// }
// Array
// for (let index in langs){
//     console.log(index,langs[index]);
// }
// String

// for (let index in name){
//     console.log(index,name[index]);
// }

// FOR OF -- use only like array- based items
// Object

// for (let value of person){
//     console.log(value);
// }

// for (let value of langs){
//     console.log(value);
// }

// String

for (let character of name) {
    console.log(character);
}
