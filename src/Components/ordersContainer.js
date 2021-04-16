import { fbFirestore } from '../firebase'
import React, { useEffect, useState } from 'react'
import Order from './order'
import OrderSort from './orderSort'

export default function OrdersContainer() {
    const [orders, setOrders] = useState([])
    const [dueDate, setDueDate] = useState('due date oldest')

    const ordersList = () => {
        return sortOrders().map(({ order, id }) => {
            return (
                <Order key={id} order={order} />
            )
        })
    }

    const dateToNum = (date) => {
        console.log(date)
        let dates = date.split('-')
        return dates.reduce((accum, current) => {
            let num = parseInt(current)
            return accum + num
        } , 0)
    }

    const sortOrders = () => {
        return orders.sort((a,b) => {
            if(dueDate === "due date oldest"){
                return dateToNum(a.order.pickupDate) - dateToNum(b.order.pickupDate)
            }else{
                return dateToNum(a.order.pickupDate) - dateToNum(a.order.pickupDate)
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
        const { value } = event.target
        setDueDate(value) 
    }

    return (
        <div>
            <OrderSort dueDate={dueDate} handleChange={handleChange}  />
            <div className="ordersList" >
                {ordersList()}
                <hr />
                {/* {sortOrders()} */}
            </div>
        </div>
    )
}