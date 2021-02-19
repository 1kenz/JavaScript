let value;

const programmer = {
    name: 'Kenan Deniz',
    age: 39,
    email: 'kendentry@gmail.com',
    langs: ['Python', 'C#', 'Javascript'],

    address: {
        city: 'İstanbul',
        district: 'Tuzla',
    },

    work: function () {
        console.log('Programcı Çalışıyor...');
    },
};

value = programmer;

value = programmer.email; // Genel olarak
value = programmer['email'];

value = programmer.langs;

value = programmer.address.city;

programmer.work();

const programmers = [
    { name: 'Kenan', age: 39 },
    { name: 'Kerem', age: 4 },
];

value = programmers[0].name;

console.log(value);
