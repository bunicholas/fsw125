const express = require('express')
const app = express()
const PORT = 9000

app.use('/', express.json())

app.use('/Todos', require('./routes/TodosRouter'))

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})