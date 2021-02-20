import { firestore } from '../firebase'
import React, { useEffect, useState } from 'react'
import Order from './order'

export default function OrdersContainer() {
    const [orders, setOrder] = useState([])

    const ordersList = () => {
        return orders.map((order)=>{
            return <Order order={order} />
        })
    }

    useEffect(()=> {
        firestore.collection('orders').onSnapshot(snapshot => {})
        setOrder([...orders, ])
    }, [orders])

    return(
        <div>
            {ordersList}
        </div>
    )
}