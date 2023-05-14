const Food = ({ food }) => {


    return ( 
        <>
            {food.price>30 && <div className="food3">
            <div className="food-name">{food.name}</div>
            <div className="food-price">{food.price}</div>
        </div>}
            {food.price>10 && food.price<30 && <div className="food2">
            <div className="food-name">{food.name}</div>
            <div className="food-price">{food.price}</div>
        </div>}
            {food.price<10 && <div className="food1">
            <div className="food-name">{food.name}</div>
            <div className="food-price">{food.price}</div>
        </div>}
        </>
     );
}
 
export default Food;