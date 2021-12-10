import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Bounty from './components/Bounty'

function App() {

  const [bounties, setBounties] = useState([])
  const [inputs, setInputs] = useState({})

  function getBounties() {
    axios.get('/bounties')
      .then(res => setBounties(res.data))
  }

function handleChange(event) {
const {name, value} = event.target
setInputs(prevState =>( {
...prevState,[name] : value
}))
}

  useEffect(() => {
    getBounties()
  }, [])

function handleSubmit(event) {
  event.preventDefault()
  axios.post('/bounties', inputs)
  .then(res => getBounties())
}

function editBounty(updates, bountyId) {
  axios.put('/bounties/' + bountyId, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty.Id !== bountyId ? bounty : res.data))
    })
}

function deleteBounty( bountyId) {
  axios.delete('/bounties/' + bountyId )
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty.Id !== bountyId))
    })
}
  return (
    <div>
      <h1>Bounty Hunter App</h1>
      <form>
        <input type="text" name="firstName" onChange = {handleChange} placeholder="Firstname" value={inputs.firstName}></input>
        <input type="text" name="lastName"onChange = {handleChange} placeholder="LastName" value={inputs.lastName}></input>
        <input type="text" name="living" onChange = {handleChange} placeholder="Living" value={inputs.living}></input>
        <input type="text" name="bountyAmount" onChange = {handleChange} placeholder="BountyAmount" value={inputs.bountyAmount}></input>
        <input type="text" name="type" onChange = {handleChange} placeholder="Type" value={inputs.type}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      
      {
        bounties.map((bounty, index) => (
          <Bounty {...bounty} editBounty={editBounty} deleteBounty={deleteBounty}/>
        ))
      }

    </div>
  );
}

export default App;
