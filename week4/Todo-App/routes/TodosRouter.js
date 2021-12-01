const express = require('express')
const TodosRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const Todos = [
    {
        name: 'Todos',
        completed: true,
        imageURl:  "http://www.image.com",
        description: "image description",
        Id: uuidv4()
    }
]

TodosRouter.route('/')
    .get((req, res) => {
        res.send(Todos)
    })
    .post((req, res) => {
        const newTodos = req.body
        newTodos.Id = uuidv4()
        Todos.push(newTodos)
        res.send('Successfully added new Todos.')
    })

TodosRouter.route('/:id')
    .delete((req, res) => {
        const TodosId = req.params.id
        const TodosIndex = Todos.findIndex(Todos => Todos.Id === TodosId)
       Todos.splice(TodosIndex, 1)
        res.send('Successfully deleted Todos.')
    })
    .put((req, res) => {
        const TodosId = req.params.id
        const TodosIndex = Todos.findIndex(Todos => Todos.Id === TodosId)
        const updatedTodos = Object.assign(Todos[TodosIndex], req.body)
        res.send(updatedTodos)
    })

module.exports = TodosRouter