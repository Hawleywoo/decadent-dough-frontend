import { fbFirestore } from '../firebase'
import React, { useEffect, useState } from 'react'
import Order from './order'

export default function OrdersContainer() {
    const [orders, setOrders] = useState([])

    const ordersList = () => {
        return orders.map((order)=>{
            return (
                <Order order={order} />
            )
        })
    }

    useEffect(()=> {
        fbFirestore.collection('orders').onSnapshot(snapshot => {
            setOrders(snapshot.docs.map(doc => doc.data()))
        })

    }, [])

    return(
        <div className="ordersList" >
            {ordersList()}
        </div>
    )
}