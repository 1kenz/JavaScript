// alert('Welcome to Javascript');
// var a = 10;

// alert(a);

var users = [
    { email: 'kenden@ken.com', password: 12345 },
    { email: 'kenden@den.com', password: 12345 },
];

var tweets = [
    { email: 'kenden@ken.com', tweet: 'Weather is beautiful today' },
    { email: 'kenden@den.com', tweet: 'Yes it is very good' },
];

var email = prompt('email ?');
var password = prompt('password ?');

function login() {
    if (
        (email == users[0].email && password == users[0].password) ||
        (email == users[1].email && password == users[1].password)
    ) {
        console.log(tweets);
    } else {
        console.log('Wrong user or password...');
    }
}

login(email, password);
