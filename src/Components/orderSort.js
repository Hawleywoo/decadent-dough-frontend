import React from 'react'

function OrderSort({ dueDate, handleChange }) {
    return (
        <div>
            <select name="dueDate" value={dueDate} onChange={handleChange} >
                <option value="due date newest" >date asc</option>
                <option value="due date oldest" >date desc</option>
            </select>
        </div>
    )
}

export default OrderSort
