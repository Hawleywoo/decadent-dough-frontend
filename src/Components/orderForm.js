import React from 'react'

export default class OrderForm extends React.Component {

    s

    const handleChange = (event) => {
        let { name } = event.target
        let value = event.target.value
        setPhoneNumber(value)
    }
    render(){
        return(
            <form>
                <input name="name" value={name} placeholder='Name...' onChange={handleChange} />
                <input name="phoneNumber" value={phoneNumber} placeholder='Phone Number (555-555-5555)' onChange={handleChange} />
            </form>
        )
    }
}