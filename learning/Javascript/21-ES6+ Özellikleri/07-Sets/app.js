// Sets - Kümeler

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add('Ken');
myset.add(true);
myset.add([1, 2, 3]);
myset.add({ a: 1, b: 2 });

const myset2 = new Set([100, 3.14, 'Ken']);

// console.log(myset);
// console.log(myset2);

// Size
// console.log(myset.size);

// Delete Metodu
// myset.delete("Ken");

// Has Method-- true, false
// console.log(myset.has("Ken"));
// console.log(myset.has(3.14));
// console.log(myset.has(2000));
// console.log(myset.has([1,2,3])); // don't use req object or arrays its return always false because have different reference

// For Each
// myset.forEach(function(value){
//     console.log(value);
// })

// For Of
// for (let value of myset){
//     console.log(value);
// }

const array = Array.from(myset);

console.log(array);
