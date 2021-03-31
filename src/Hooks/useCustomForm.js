import React, { useState, useEffect, useRef } from 'react'

export default function useCustomForm({ initialValues, onSubmit }) {
    const [ values, setValues ] = useState(initialValues || {})
    const [ errors, setErrors ] = useState({})
    const [ touched, setTouched ] = useState({})
    const [ onSubmitting, setOnSubmitting ] = useState(false)
    const [ onBlur, setOnBlur ] = useState(false)
    const formRendered = useRef(true)

    useEffect(()=> {
        if(formRendered.current){
            setValues(initialValues);
            setErrors({});
            setOnSubmitting(false);
            setOnBlur(false);
        }
        formRendered.current = false
    }, [initialValues]);

    const handleChange = (event) => {
        const { target } = event
        const { name, value } = target
        event.persist()
        setValues({ ...values, [name]: value })
    }

    const handleBlur = (event) => {
        const { target } = event
        const { name } = target
        setTouched({ ...touched, [name]: true})
        setErrors({ ...errors })
    }

    const handleSubmit = async (event) => {
        if(event) event.preventDefault();
        setErrors({ ...errors })
        await onSubmit({ values, errors })
        setValues(initialValues)
    }

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    }
}
