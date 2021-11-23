const express = require('express')
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bounties = [
    {
        firstName: 'Darth',
        lastName: 'Millenial',
        living: true,
        bountyAmount: 50,
        type: 'Sith',
        Id: uuidv4()
    }
]

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty.Id = uuidv4()
        bounties.push(newBounty)
        res.send('Successfully added new Bounty.')
    })

module.exports = bountyRouter