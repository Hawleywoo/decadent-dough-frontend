import React, { useState, useEffect, useRef } from 'react'

export default function useOrderForm({ initialValues, onSubmit }) {
    const [ values, setValues ] = useState(initialValues || {})
    const [ errors, setErrors ] = useState({})
    const [ touched, setTouched ] = useState({})
    const [ onSubmitting, setOnSubmitting ] = useState(false)
    const [ onBlur, setOnBlur ] = useState(false)

    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        callback()
    }

    const handleInputChange = () => {

    }

    return (
        
    )
}
