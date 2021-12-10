import React, { useState } from 'react'

function Bounty(props) {

    const initInputs = {
        firstName: props.firstName || '',
        lastName: props.lastName || '',
        living: props.living || '',
        bountyAmount: props.bountyAmount || '',
        type: props.type || ''
    }

    const [inputs, setInputs] = useState(initInputs)
    const [editToggle, setEditToggle] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    function handleDelete(e) {
        e.preventDefault()
        props.deleteBounty(props.Id)
    }
    function handleSubmit(e) {
        e.preventDefault()

        props.editBounty(inputs, props.Id)

        // setInputs(initInputs)

        setEditToggle(false)
    }

    //console.log('bounty: ', props)

    return (
        <div>

            {!editToggle ?
                <>

                    <h3>{`Name: ${props.firstName} ${props.lastName}`}</h3>
                    <p>Living: {props.living === true ? 'Yes' : 'No'}</p>
                    <p>Bounty Amount: {props.bountyAmount}</p>
                    <p>Type: {props.type}</p>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>edit</button>
                    <button onClick={handleDelete}>delete</button>
                </>

            :

                <>
                    <form>
                        <input type="text" name="firstName" onChange = {handleChange} placeholder="Firstname" value={inputs.firstName}></input>
                        <input type="text" name="lastName"onChange = {handleChange} placeholder="LastName" value={inputs.lastName}></input>
                        <input type="text" name="living" onChange = {handleChange} placeholder="Living" value={inputs.living}></input>
                        <input type="text" name="bountyAmount" onChange = {handleChange} placeholder="BountyAmount" value={inputs.bountyAmount}></input>
                        <input type="text" name="type" onChange = {handleChange} placeholder="Type" value={inputs.type}></input>
                        <button onClick={handleSubmit}>Save</button>
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>cancel</button>
                    </form>
                </>
            }


        </div>
    )
}

export default Bounty