import { useEffect, useState } from "react";
import Food from "./Food";

const Main = ({ data, change, isOrder }) => {
    const [n, setN] = useState(0);
    const [show, setShow] = useState(data.slice(0+3*n, 3+3*n));

    useEffect(() => {
        setShow(data.slice(0+3*n, 3+3*n));
    }, [n, data])

    return ( 
        <div className="main">
            <div className="pagination">
                <button onClick={() => setN(n-1)} disabled={n<=0} className="pagination-btn">Last page</button>
                <button onClick={() => setN(n+1)} disabled={n>=1} className="pagination-btn">Next page</button>
            </div>
            
            <div className="food-container">
                {show && show.map((food) => (
                <Food food={food} change={change} isOrder={isOrder}/>
            ))}
            </div>
            
        </div>
     );
}
 
export default Main;