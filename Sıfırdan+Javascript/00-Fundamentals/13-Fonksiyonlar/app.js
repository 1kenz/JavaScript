// Fonksiyon Tanımlama

// function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){

// if (typeof name === "undefined") name = "Bilgi Yok";

// if(typeof age === "undefined") age = "Bilgi Yok";

//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Kenan", 39); // Function Call

// merhaba("Ayşe",33);

// merhaba();

// merhaba("Kerem");

// function square(x) {
//     return x * x;

//     console.log("Naber"); // Hiç bir zaman çalıştırılmaz.

// }
// function cube(x) {
//     return x*x*x;
// }

// let a = cube(square(12));

// console.log(a);

// function merhaba(){
//     return "Merhaba";
// }

// console.log(merhaba());

// Function Expression

// const merhaba = function(name){
//     console.log("Merhaba " + name);
// };

// merhaba("Kenan");

// Immediately Invoked Function Expression (IIFE)

// (function(name){
//     console.log("Merhaba: " + name);
// })("Murat");

const database = {
    host: 'localhost',
    add: function () {
        console.log('Eklendi');
    },
    get: function () {
        console.log('Elde Edildi');
    },
    update: function (id) {
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function (id) {
        console.log(`Id: ${id} Silindi`);
    },
};

console.log(database.host);

database.add();

database.delete(10);
