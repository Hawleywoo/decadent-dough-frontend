import React from 'react'

const initialState = {
    name: '',
    phoneNumber: '',
}

export default class OrderForm extends React.Component {

    state = {
        name: '',
        phoneNumber: '',
        imageFile: null,
        src: null,
    }

    handleChange = (event) => {
        let { name } = event.target
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addOrder(this.state)
        this.resetState()
    }

    resetState = () => {
        this.setState(initialState)
    }

    handleFileChange = (event) => {
        this.setState({
            imageFile: event.target.files[0],
            src: URL.createObjectURL(event.target.files[0])
        })
    }

    fileUploadHandler = () => {

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" value={this.state.name} placeholder='Name...' onChange={this.handleChange} />
                    <input name="phoneNumber" value={this.state.phoneNumber} placeholder='Phone Number (555-555-5555)' onChange={this.handleChange} />
                    <input type="textarea" />
                    <input type="file" multiple onChange={this.handleFileChange} />
                    <input type="submit" placeholder="Submit Order" />
                </form>
                <img src={this.state.src}  alt="Uploaded" className="uploaded-image"/>
                <p>You will recieve an email once the order is recieved.</p>
            </div>
        )
    }
}  