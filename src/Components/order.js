import React from 'react'

export default function Order({name, email, cookieDesc, phoneNumber, pickupDate, imageUrl}){
    return (
        <div>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone Number: {phoneNumber}</h4>
            <h4>Cookies: {cookieDesc}</h4>
            <h4>Pickup Date: {cookieDesc}</h4>
        </div>
    )
}