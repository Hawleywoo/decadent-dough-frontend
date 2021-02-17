import React, { useState } from 'react'
import { storage } from '../firebase'

const initialState = {
    name: '',
    phoneNumber: '',
}

const allinputs = {imgUrl: ''}

export default function OrderForm(props) {
    const [ imageAsFile, setImageAsFile ] = useState({})
    const [ imageAsUrl, setImageAsUrl ] = useState(allinputs)

    const handleImageAsFile = (event) => {
        const image = event.target.files[0]
        console.log( image, 'image')
        setImageAsFile(image)
    }

    // state = {
    //     name: '',
    //     phoneNumber: '',
    //     imageFile: null,
    //     src: null,
    // }

    // handleChange = (event) => {
    //     let { name } = event.target
    //     let value = event.target.value
    //     this.setState({
    //         [name]: value
    //     })
    // }

    const handleSubmit = (event) => {
        console.log(imageAsFile)
        event.preventDefault()
        props.addOrder()
        // this.resetState()
    }

    // resetState = () => {
    //     this.setState(initialState)
    // }

    // handleFileChange = (event) => {
    //     this.setState({
    //         imageFile: event.target.files[0],
    //         src: URL.createObjectURL(event.target.files[0])
    //     })
    // }

    // fileUploadHandler = () => {

    // }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input name="name"  placeholder='Name...' onChange={()=>{}} />
                <input name="phoneNumber"  placeholder='Phone Number (555-555-5555)' onChange={()=>{}} />
                <input type="textarea" />
                <input type="file" multiple onChange={handleImageAsFile} />
                <input type="submit" placeholder="Submit Order" />
            </form>
            <img src={imageAsFile.name} alt="Uploaded" className="uploaded-image" />
            <p>You will recieve an email once the order is recieved.</p>
        </div>
    )
}  