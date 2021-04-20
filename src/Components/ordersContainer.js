import { fbFirestore } from '../firebase'
import React, { useEffect, useState } from 'react'
import Order from './order'
import OrderSort from './orderSort'

export default function OrdersContainer() {
    const [orders, setOrders] = useState([])
    const [invoicePaid, setInvoicePaid] = useState(false)
    const [delivered, setDelivered] = useState(false)
    const [dueDate, setDueDate] = useState('due date newest')

    const ordersList = () => {
        return sortOrders().map(({ order, id }) => {
            return (
                <Order key={id} order={order} handlePaidInvoice={handlePaidInvoice} handleDelivered={handleDelivered}/>
            )
        })
    }

    const handleDelivered = () => {
        setDelivered(() => !delivered)
    }

    const handleDeleteOrder = () => {

    }

    const handlePaidInvoice = () => {
        setInvoicePaid(() => !invoicePaid)
    }

    const dateToNum = (date) => {
        let dates = date.split('-')
        return parseInt(dates[0] + dates[1] + dates[2])
    }

    const byDate = (a, b) => {
        if (dueDate === 'due date newest') {
            return dateToNum(a) > dateToNum(b)
        } else {
            return dateToNum(b) > dateToNum(a)
        }
    }

    const sortOrders = () => {
        return orders.sort((a, b) => {
            if (invoicePaid) {
                return (a.order.invoice_paid === b.order.invoice_paid) ? (byDate(a.order.pickupDate, b.order.pickupDate) ? -1 : 1) : a.order.invoice_paid ? -1 : 1
            } else {
                return byDate(a.order.pickupDate, b.order.pickupDate) ? -1 : 1
            }
        })
    }


    useEffect(() => {
        fbFirestore.collection('orders').onSnapshot(snapshot => {
            setOrders(snapshot.docs.map(doc => {
                return (
                    {
                        id: doc.id,
                        order: doc.data()
                    }
                )
            }))
        })
    }, [])


    const handleChange = (event) => {
        const { value, checked } = event.target

        if (value === "due date oldest" || value === "due date newest") {
            setDueDate(value)
        }

        if (typeof checked !== 'undefined') {
            setInvoicePaid(checked)
        }
    }


    return (
        <div>
            <OrderSort dueDate={dueDate} invoicePaid={invoicePaid} handleChange={handleChange} />
            <div className="ordersList">
                <table >
                    <thead>
                        <tr>
                            <th className="name" >Name</th>
                            <th className="email" >Email</th>
                            <th className="phone" >Phone Number</th>
                            <th width="200" className="cookie-desc" >Cookie Description</th>
                            <th className="pickup" >Pick Up Date</th>
                            <th className="paid" >Invoice Paid</th>
                            <th className="delivered" >Delivered</th>
                            <th className="delete" >Delete</th>
                        </tr>

                    </thead>
                    <tbody>
                        {ordersList()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}