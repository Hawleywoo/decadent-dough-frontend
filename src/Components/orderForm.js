import React, { useState } from 'react'
import useCustomForm from '../Hooks/useCustomForm'
import { fbStorage, fbFirestore } from '../firebase'
import Modal from './modal'

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
    const [ open, setOpen ] = useState(false)
    const [ confirm, setConfirm ] = useState(false)

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

    const handleSubmitConfirm = (event) => {
        event.preventDefault()
        setOpen(true)
        if(confirm === true) handleSubmit()
    }


    // handleFileChange = (event) => {
    //     this.setState({
    //         imageFile: event.target.files[0],
    //         src: URL.createObjectURL(event.target.files[0])
    //     })
    // }

    // fileUploadHandler = () => {

    // }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="orderform" >
            {open && <Modal handleClose={handleClose} />}
            <h2>Order Cookies</h2>
            <hr className="hr__order-price-sheet"/>
            <p className="option-description"> this how ordering works</p>
            <button onClick={() => setOpen(true)} />
            <form className="card" onSubmit={handleSubmit} >
                <label>Name</label>
                <input name="name" value={values.name} placeholder='Name...' onChange={handleChange} />
                <label>Email</label>
                <input name="email" value={values.email} placeholder='Email...' onChange={handleChange} />
                <label>Phone Number</label>
                <input name="phoneNumber" value={values.phoneNumber} placeholder='Phone Number (555-555-5555)' onChange={handleChange} />
                <label>Cookie Description</label>
                <input type="textarea" className="cookie-description" name="cookieDesc" value={values.cookieDesc} onChange={handleChange} />
                <label>Pick Up Date</label>
                <input type="date" name="pickupDate" value={values.pickupDate}  onChange={handleChange} required/>
                <label>Inspiration Photos</label>
                <input type="file" multiple onChange={handleImageAsFile} />
                <input type="submit" placeholder="Submit Order" />
            </form>
            <img src={imageAsFile.name} alt="Uploaded" className="uploaded-image" />
            <p>You will recieve an email once the order is recieved.</p>
        </div>
    )
} 