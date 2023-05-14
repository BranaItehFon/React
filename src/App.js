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
import { useEffect, useState } from 'react'

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
  const [price, setPrice] = useState(0);
  const [showData, setShowData] = useState(data);
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App">
        <Navbar price={price}/>
        <div className="body">
          <Routes>
          <Route path="/" element={<Main data={showData}/>}/>
            <Route path="/main" element={<Main data={showData}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
