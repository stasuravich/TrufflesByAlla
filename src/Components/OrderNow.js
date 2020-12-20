import {useState, useEffect, useRef} from "react";
import '../CSS/OrderNow.css';
import Paypal from './Paypal.js';

const OrderNow =props=>{
  //console.log("OrderNow")
  const [checkout, setCheckout]=useState(null);
  const selected=useRef([0, 0, 0, 0, 0, 0, 0]);

  const options = [
    {id: 0,
    image: "1",
    choc: "Chocolatier Choice Assortment Box:"},
    {id: 1,
    image: "2",
    choc: "Coconut Caramel Truffles:"},
    {id: 2,
    image: "3",
    choc: "Pistachio Cherry Truffles"},
    {id: 3,
    image: "4",
    choc: "Espresso Macchiato Truffles:"},
    {id: 4,
    image: "5",
    choc: "Chocolate Truffles:"},
    {id: 5,
    image: "6",
    choc: "Caffè Mocha Truffles:"},
    {id: 6,
    image: "7",
    choc: "Hazelnut Truffles:"}
  ]

  const firstSelectOpt=[
    {id: 0,
    pieces: 8,
    money: 20.00},
    {id: 1,
    pieces: 12,
    money: 30.00},
    {id: 2,
    pieces: 20,
    money: 50.00},
    {id: 3,
    pieces: 30,
    money: 75.00},
    {id: 4,
    pieces: 40,
    money: 100.00}
  ]

  const selectOptions=[
    {id: 0,
    pieces: 4,
    money: 10.00},
    {id:1,
    pieces: 6,
    money: 15.00},
    {id: 2,
    pieces: 8,
    money: 20},
    {id: 3,
    pieces: 10,
    money: 25.00},
    {id: 4,
    pieces: 12,
    money: 30.00},
    {id: 5,
    pieces: 20,
    money: 50.00},
    {id: 6,
    pieces: 30,
    money: 75.00}
  ]

  useEffect(() =>{
    document.getElementsByName("orderNow").forEach(function(elem, idx) {elem.style.color = 'green';})
    document.title = "Order Now - Truffles by Alla";
  }, []);

  return (
    <div className="parent">
      <div className="OrderNow">
        <h1>Order Now</h1>
        <a className="return" href="menu">Or return to menu</a>
        <br/><br/>
        {options.map(option=>(
          <div key={option.id} className="option">
            <span>{option.image}</span>
            <div className="package">
              <div className="choc">{option.choc}</div>
              <hr className="line"/>
              <select className="select" onChange={e=>selected.current[option.id]= e.target.value}>
                {option.choc==="Chocolatier Choice Assortment Box:" ? firstSelectOpt.map(option=>(
                  <option value={option.id} key={option.id}>{option.pieces} pieces ${option.money} USD</option>)) :
                selectOptions.map(option=>(
                  <option value={option.id} key={option.id}>{option.pieces} pieces ${option.money} USD</option>))}
              </select>
              <hr className="line"/>
              {checkout===option.id ? <Paypal options={options} id= {option.id} selected={selected} firstSelectOpt={firstSelectOpt} selectOptions={selectOptions}/> : (
                <button className="addCart" onClick={()=> setCheckout(option.id)}>Add to Cart</button>)}
            </div>
          </div>))}
      </div>
    </div>
  );
};

export default OrderNow;
