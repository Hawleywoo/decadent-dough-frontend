import React, { useState } from 'react'
import useCustomForm from '../Hooks/useOrderForm'
import { fbStorage, fbFirestore } from '../firebase'

const initialValues = {
    name: '',
    phoneNumber: '',
    email: '',
    cookieDesc: '',
    pickupDate: new Date(),
}

const allinputs = {imgUrl: ''}

export default function OrderForm(props) {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = useCustomForm({ 
            initialValues,
            onSubmit: formValues => {
                const { values } = formValues
                fbFirestore.collection('orders').add({
                    name: values.name,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    cookieDesc: values.cookieDesc,
                    pickupDate: values.pickupDate,
                    imageUrl: 'something'
                }).then((docRef) => {
                    console.log(docRef.id)
                }).catch((error) => console.error(error, errors))
            }
        });

    const [ imageAsFile, setImageAsFile ] = useState({})
    const [ imageAsUrl, setImageAsUrl ] = useState(allinputs)

    const handleImageAsFile = (event) => {
        const image = event.target.files[0]
        console.log( image, 'image')
        setImageAsFile(image)
    }

    // const handleFirebaseUpload = (event) => {
    //     const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
    //     uploadTask.on('state_changed', console.log, console.error, () => {

    //     })
    // }

    // const addRecord = () => {
    //     fetch('https://decadent-dough.firebaseio.com/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: name,
    //             email: email,
    //             phoneNumber: phoneNumber,
    //             cookieDesc: cookieDesc
    //         })
    //     }).then(response => console.log(response.json()))
    // }

    // state = {
    //     name: '',
    //     phoneNumber: '',
    //     imageFile: null,
    //     src: null,
    // }

    // const handleChange = (event) => {
    //     let { name } = event.target
    //     let value = event.target.value
    // }

    // const handleSubmit = (event) => {
    //     console.log(imageAsFile)
    //     event.preventDefault()
    //     addRecord(event)
    //     props.addOrder()
    // }

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
                <input name="name" value={values.name} placeholder='Name...' onChange={handleChange} />
                <input name="email" value={values.email} placeholder='Email...' onChange={handleChange} />
                <input name="phoneNumber" value={values.phoneNumber} placeholder='Phone Number (555-555-5555)' onChange={handleChange} />
                <input type="textarea" name="cookieDesc" value={values.cookieDesc} onChange={handleChange} />
                <input type="date" name="pickupDate" value={values.pickupDate}  onChange={handleChange} required/>
                <input type="file" multiple onChange={handleImageAsFile} />
                <input type="submit" placeholder="Submit Order" />
            </form>
            <img src={imageAsFile.name} alt="Uploaded" className="uploaded-image" />
            <p>You will recieve an email once the order is recieved.</p>
        </div>
    )
} 