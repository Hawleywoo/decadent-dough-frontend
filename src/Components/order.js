import React from 'react'

export default function Order( { order: { name, phoneNumber, email, cookieDesc, pickupDate, imageUrl, invoice_paid, delivered}, handleInvoicePaid, handleDelivered, handleDeleteOrder } ){

    return (
        <tr className="order" >
            <td>{name}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td className="order__cookie-description">{cookieDesc}</td>
            <td>{pickupDate}</td>
            <td><button onClick={handleInvoicePaid}>{invoice_paid ? "😁" : "🤬"}</button></td>
            <td><button onClick={handleDelivered}> {delivered ? "✅" : " "}</button> </td>
            <td><button onClick={handleDeleteOrder}>Delete</button></td>
        </tr>
    )
}