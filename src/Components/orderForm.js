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
    const [ name , setName ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ phoneNumber , setPhoneNumber ] = useState('')
    const [ cookieDesc , setCookieDesc ] = useState('')

    const handleImageAsFile = (event) => {
        const image = event.target.files[0]
        console.log( image, 'image')
        setImageAsFile(image)
    }

    const handleFirebaseUpload = (event) => {
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
        uploadTask.on('state_changed', console.log, console.error, () => {

        })
    }

    const addRecord = () => {
        fetch('https://decadent-dough.firebaseio.com/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                cookieDesc: cookieDesc
            })
        }).then(response => console.log(response.json()))
    }

    // state = {
    //     name: '',
    //     phoneNumber: '',
    //     imageFile: null,
    //     src: null,
    // }

    const handleChange = (event) => {
        let { name } = event.target
        let value = event.target.value
    }

    const handleSubmit = (event) => {
        console.log(imageAsFile)
        event.preventDefault()
        addRecord(event)
        props.addOrder()
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
                <input name="name" value={name} placeholder='Name...' onChange={handleChange} />
                <input name="name" value={email} placeholder='Email...' onChange={handleChange} />
                <input name="phoneNumber" value={phoneNumber} placeholder='Phone Number (555-555-5555)' onChange={handleChange} />
                <input type="textarea" value={cookieDesc} onChange={handleChange} />
                <input type="file" multiple onChange={handleImageAsFile} />
                <input type="submit" placeholder="Submit Order" />
            </form>
            <img src={imageAsFile.name} alt="Uploaded" className="uploaded-image" />
            <p>You will recieve an email once the order is recieved.</p>
        </div>
    )
}  