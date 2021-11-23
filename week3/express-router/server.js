const express = require('express')
const app = express()
const PORT = 9000

app.use('/', express.json())

app.use('/bounties', require('./routes/bountyRouter'))

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})