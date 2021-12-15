const express = require('express');
const app = express();
const fruitRouter = express.Router();
const { v4: uuidv4 } = require('uuid')
let fruits = [
    { fruit: "Apple",  "type":"food", "price":"2",_id: uuidv4()},
    { fruit: "Orange", "type":"food", "price":"2",_id: uuidv4()},
    { fruit: "Banana", "type":"food", "price":"2",_id: uuidv4()}
];

fruitRouter.get('/fruits', (req, res) => {
    res.send(fruits)
});

fruitRouter.post('/fruits', (req, res) => {
    const newfruit = req.fruit;
    newfruit._id = uuidv4();
    fruits.push(newfruit)
    console.log(fruits)
    res.send('Successfully added ${newfruit.fruit} to the database');
})

module.exports = fruitRouter;