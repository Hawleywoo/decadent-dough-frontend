import React from 'react'
import Order from './order'

export default function OrdersContainer({ orders }) {

    const ordersList = () => {
        return orders.map((order)=>{
            return <Order order={order} />
        })
    }


    return(

        
    )
}