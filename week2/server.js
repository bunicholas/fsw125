const express = require('express');
const app = express();

const PORT = 9000;

const users = [
    { name: 'John Doe', age: 30},
    { name: 'Jane Doe', age: 25}
]

const youandme = [
    { name: 'Nick Carroll', age: 21},
    { name: 'Todd Polak', age: 49}
]

const drivers = [
    { name: 'Chase Elliot', car: 9},
    { name: 'Kyle Larson', car: 5}
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/youandme', (req, res) => {
    res.send(youandme)
})

app.get('/drivers', (req, res) => {
    res.send(drivers)
})

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
});