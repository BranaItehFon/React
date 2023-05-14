import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/Main";
import Order from "./components/Order";
import { useEffect, useState } from 'react'
import Search from "./components/Search";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Burger",
      ordered: false,
      price: 5,
    },
    {
      id: 2,
      name: "Pizza",
      ordered: false,
      price: 8,
    },
    {
      id: 3,
      name: "Fries",
      ordered: false,
      price: 15,
    },
    {
      id: 4,
      name: "Icecream",
      ordered: false,
      price: 25,
    },
    {
      id: 5,
      name: "Salad",
      ordered: false,
      price: 35,
    },
    {
      id: 6,
      name: "Coca cola",
      ordered: false,
      price: 45,
    },
  ]);

  // const [order, setOrder] = useState([]);
  const [order, setOrder] = useState([]);
  const [price, setPrice] = useState(0);

  function addOrder(food){
    if (!order.some(item => item.id === food.id)) {
      setOrder([...order, food]);
      setPrice(price + food.price);
    }
  }

  function removeOrder(food) {
    setOrder(order.filter(item => item.id !== food.id));
    setPrice(price - food.price);
  }

  const [name, setName] = useState('');

  const [showData, setShowData] = useState(data);

  useEffect(() => {
    let temp = data.filter((food) => food.name.includes(name))
    setShowData(temp)
  }, [name]);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar price={price}/>
        <Search name={name} setName={setName}/>
        <div className="body">
          <Routes>
          <Route path="/" element={<Main data={showData} change={addOrder} isOrder={false}/>}/>
            <Route path="/main" element={<Main data={showData} change={addOrder} isOrder={false}/>}/>
            <Route path="/myorder" element={<Order order={order} change={removeOrder} isOrder={true}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
