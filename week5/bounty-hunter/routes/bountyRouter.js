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

bountyRouter.route('/:id')
    .delete((req, res) => {
        const bountyId = req.params.id
        const bountyIndex = bounties.findIndex(bounty => bounty.Id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send('Successfully deleted Bounty.')
    })
    .put((req, res) => {
        const bountyId = req.params.id
        const bountyIndex = bounties.findIndex(bounty => bounty.Id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
        res.send(updatedBounty)
    })

module.exports = bountyRouter