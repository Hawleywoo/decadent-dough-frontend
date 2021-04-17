import React from 'react'

export default function Order( { order: { name, phoneNumber, email, cookieDesc, pickupDate, imageUrl, invoice_paid} } ){
    return (
        <div className="order" >
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Cookie description: {cookieDesc}</p>
            <p>Pickup Date: {pickupDate}</p>
            <p>Invoice Paid: {invoice_paid ? "😁" : "🤬"}</p>
        </div>
    )
}