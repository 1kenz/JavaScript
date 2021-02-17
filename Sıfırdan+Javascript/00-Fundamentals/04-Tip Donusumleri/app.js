let value;

// Veritiplerini String'e Çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () {
    console.log();
});
value = String([1, 2, 3, 4]);

value = (10).toString();
value = (3.14).toString();

// Veritiplerini Sayılara Çevirme
value = Number('123');
value = Number(null); // 0
value = Number(undefined); // NaN not a number
value = Number('Hello World'); // NaN not a number
value = Number(function () {
    console.log();
}); // NaN not a number
value = Number([1, 2, 3, 4]); // NaN not a number

value = Number('3.14');
value = parseFloat('3.14');

value = parseInt('3');

// Otomatik çevirme
const a = 'Hello' + 53;
console.log(a); // Hello53
console.log(typeof a); // string

const a = '34' + 53;
console.log(a); // 3453
console.log(typeof a); // string

const a = Number('34') + 53;
console.log(a); // 87
console.log(typeof a); // number

console.log(value);
console.log(typeof value);
