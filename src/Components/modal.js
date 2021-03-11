import React from 'react'

function Modal({handleClose}) {
    

    return (
        <div className="orderform__modal">
            <div className="modal__button">
                <h3 onClick={handleClose} className="modal__button--close" >+</h3>
            </div>
            <h3>Almost There...</h3>
            <p>If everything looks correct, hit submit and you will recieve and email once the order is recieved</p>
            <button>submit</button>
        </div>
    )
}

export default Modal
