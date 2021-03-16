import { fbFirestore } from '../firebase'
import React, { useEffect, useState } from 'react'
import Order from './order'
import OrderSort from './orderSort'

export default function OrdersContainer() {
    const [orders, setOrders] = useState([])
    const [dueDate, setDueDate] = useState('due date oldest')

    const ordersList = () => {
        return orders.map(({ order, id }) => {
            return (
                <Order key={id} order={order} />
            )
        })
    }

    const sortOrders = () => {
        return orders.sort((a,b) => {
            
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
        const { value } = event.target
        setDueDate(value) 
    }

    return (
        <div>
            <OrderSort dueDate={dueDate} handleChange={handleChange}  />
            <div className="ordersList" >
                {ordersList()}
            </div>
        </div>
    )
}