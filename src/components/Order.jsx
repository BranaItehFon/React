import Food from "./Food";
import { useEffect, useState } from "react";

const Order = ({ order, change, isOrder }) => {
    return ( 
        <div className="main">
            <div className="food-container">
                {order && order.map((food) => (
                <Food food={food} change={change} isOrder={isOrder}/>
            ))}
            </div>
        </div>
     );
}
 
export default Order;