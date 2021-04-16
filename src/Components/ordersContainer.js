import { fbFirestore } from '../firebase'
import React, { useEffect, useState } from 'react'
import Order from './order'
import OrderSort from './orderSort'

export default function OrdersContainer() {
    const [orders, setOrders] = useState([])
    const [invoicePaid, setInvoicePaid] = useState(false)
    const [dueDate, setDueDate] = useState('due date newest')

    const ordersList = () => {
        return sortOrders().map(({ order, id }) => {
            return (
                <Order key={id} order={order} />
            )
        })
    }

    const dateToNum = (date) => {
        let dates = date.split('-')
        return parseInt(dates[0] + dates[1] + dates[2])
    }

    const sortOrders = () => {

        return orders.sort((a, b) => {
            if(invoicePaid){
                if(dueDate === 'due date newest'){
                    if(dateToNum(a.order.pickupDate) > dateToNum(b.order.pickupDate) && a.order.invoice_paid){
                        return -1
                    } else{
                        return 1
                    }
                }else{
                    if(dateToNum(a.order.pickupDate) > dateToNum(b.order.pickupDate) && a.order.invoice_paid){
                        return -1
                    } else{
                        return 1
                    }
                }
            }

            if (dueDate === "due date oldest") {
                return dateToNum(a.order.pickupDate) - dateToNum(b.order.pickupDate)
            } else if (dueDate === 'due date newest') {
                return dateToNum(b.order.pickupDate) - dateToNum(a.order.pickupDate)
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
    })

    const handleChange = (event) => {
        const { value, checked } = event.target

        if (value === "due date oldest" || value === "due date newest") {
            setDueDate(value)
        }
        setInvoicePaid(checked)

    }

    return (
        <div>
            <OrderSort dueDate={dueDate} invoicePaid={invoicePaid} handleChange={handleChange} />
            <div className="ordersList" >
                {ordersList()}
            </div>
        </div>
    )
}