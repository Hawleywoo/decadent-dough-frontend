import { fbFirestore } from '../firebase'
import React, { useEffect, useState } from 'react'
import Order from './order'

export default function OrdersContainer() {
    const [orders, setOrders] = useState([])

    const ordersList = () => {
        return orders.map((order)=>{
            console.log(order)
            return <Order order={order} />
        })
    }

    useEffect(()=> {
        fbFirestore.collection('orders').onSnapshot(snapshot => {
            setOrders(snapshot.docs.map(doc => doc.data()))
        })
        let docss = fbFirestore.collection('orders').get()
        console.log(docss)
    }, [])

    return(
        <div>
            {ordersList}
        </div>
    )
}