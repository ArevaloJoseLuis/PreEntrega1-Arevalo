import React from "react"

import { BsCart3 } from "react-icons/bs";;

const CartWidget = () => {
    return (
        <div className="container">
            <button>
                <BsCart3 /><strong>0</strong>
                
            </button>
        </div>
    )
}

export default CartWidget