import React from 'react'

export default function Order( { order: { name, phoneNumber, email, cookieDesc, pickupDate, imageUrl} } ){
    // const { name, phoneNumber, email, cookieDesc, pickupDate, imageUrl} = order
    // console.log(name, pickupDate)
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Cookie description: {cookieDesc}</p>
            {/* <p>Pickup Date: {pickupDate}</p> */}
        </div>
    )
}