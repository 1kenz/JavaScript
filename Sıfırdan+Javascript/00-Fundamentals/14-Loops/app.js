// While Döngüleri

// let i = 0;

// while(i < 10){ // Sonsuz Döngü

//     console.log(i);

//     i++;

// }

// let i = 10;

// while (i > 0){
//     console.log(i);

// i--; // i--

//     i -= 2;
// }

// Break ve Continue

// let i = 0;

// while (i < 10) { // Sonsuz Döngü

//     if (i == 3 || i == 5){
//         i++;
//         break;
//         continue;

//     }
//     console.log(i);
//     i++;
// }

// Do While- ilk önce çalıştırır sonra koşulu kontrol eder. yani en az bir şekilde çalışır

// let i = 0;

// do {
//     console.log(i);
//     i++;

// }while(i < 10);

const langs = ['Python', 'Javascript', 'Java'];

// let index = 0;

// while(index < langs.length){

//     console.log(langs[index]);

//     index++;
// }

// for (let index = 0;index < langs.length;index++){

//     console.log(langs[index]);

// }

// FOREACH
// langs.forEach(function(lang,index){
//     console.log(lang,index);

// });

// const users = [
//     {name:"Kenan",age:39},
//     {name:"Ayşegül",age:32},
//     {name:"Kerem",age:4}
// ];

// MAPS
// const names = users.map(function(user){
//     return user.name;
// });
// const ages = users.map(function(user){
//     return user.age;
// });
// console.log(names);
// console.log(ages);

// FOR IN
const user = {
    name: 'Kenan',
    age: 39,
};

for (let key in user) {
    console.log(key, user[key]);
}
