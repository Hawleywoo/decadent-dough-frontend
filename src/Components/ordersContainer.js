import { fbFirestore } from '../firebase'
import React, { useEffect, useState } from 'react'
import Order from './order'

export default function OrdersContainer() {
    const [orders, setOrders] = useState([])

    const ordersList = () => {
        return orders.map(({order, id}) => {
            return (
                <Order key={id} order={order} />
            )
        })
    }

    useEffect(()=> {
        fbFirestore.collection('orders').onSnapshot(snapshot => {
            setOrders(snapshot.docs.map(doc => {
                return (
                    {
                        id: doc.id,
                        order: doc.data()
                    }
                )
            }) )
        })
    })

    return(
        <div className="ordersList" >
            {ordersList()}
        </div>
    )
}