"use strict";

// Değişken Oluşturma
// var a = 20;
// var b = 10;
// var c = 40;
// console.log(a,b,c);
// 1-Primitive
// var a = 10; // Number Veri Tipi
// var b = 3.14; // Number Veri Tipi
// console.log(typeof a);
// console.log(typeof b);
// String
// var name = "Ken";
// console.log(name);
// console.log(typeof name);
// Boolean
// var a = false;
// console.log(typeof a);
// NULL
// var a = null;
// console.log(a);
// console.log(typeof a);
// UNDEFINED
// var a;
// console.log(a);
// 2-Reference Veri Tipleri (Object)
// ARRAY
// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(typeof numbers);
// Object
// var person = {
//     name: "Ken",
//     age : 25
// }
// console.log(person);
// console.log(typeof person);
// Date
// var date = new Date();
// console.log(date);
// console.log(typeof date);
// Function
// var merhaba = function(){
//     console.log("Merhaba");
// }
// console.log(merhaba);
// console.log(typeof merhaba);
// Primitive
// var a = 10;
// var b = a;
// console.log(a,b);
// a = 20;
// console.log(a,b);
// Reference
var a = [1, 2, 3];
var b = a;
a.push(4);
console.log(b);