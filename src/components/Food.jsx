const Food = ({ food, change, isOrder }) => {


    return ( 
        <>
            {food.price>30 && <div className="food3">
            <div className="food-name">{food.name}</div>
            <div className="food-price">{food.price}</div>
            {!isOrder && <button className="add-btn" onClick={() => change(food)}>Add to order</button>}
            {isOrder && <button className="add-btn" onClick={() => change(food)}>Remove from order</button>}
        </div>}
            {food.price>10 && food.price<30 && <div className="food2">
            <div className="food-name">{food.name}</div>
            <div className="food-price">{food.price}</div>
            {!isOrder && <button className="add-btn" onClick={() => change(food)}>Add to order</button>}
            {isOrder && <button className="add-btn" onClick={() => change(food)}>Remove from order</button>}
        </div>}
            {food.price<10 && <div className="food1">
            <div className="food-name">{food.name}</div>
            <div className="food-price">{food.price}</div>
            {!isOrder && <button className="add-btn" onClick={() => change(food)}>Add to order</button>}
            {isOrder && <button className="add-btn" onClick={() => change(food)}>Remove from order</button>}
        </div>}
        </>
     );
}
 
export default Food;