import React from 'react'

function OrderSort({ dueDate, invoicePaid, handleChange }) {
    return (
        <div>
            <select name="dueDate" value={dueDate} onChange={handleChange} >
                <option value="due date newest" >Most Recent to Oldest</option>
                <option value="due date oldest" >Oldest to Most Recent</option>
            </select>
            <label>Invoice Paid: </label>
            <input name="invoicePaid" value={invoicePaid} onChange={handleChange} type="checkbox" />
        </div>
    )
}

export default OrderSort
