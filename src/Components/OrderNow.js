import {useEffect} from "react";
import '../CSS/OrderNow.css';

const OrderNow =props=>{
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
  useEffect(() =>{
    document.getElementById("orderNow").style.color="green";
  });

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
              <select className="select">
                <option>4 pieces $10.00 USD</option>
                <option>6 pieces $15.00 USD</option>
                <option>8 pieces $20.00 USD</option>
                <option>10 pieces $25.00 USD</option>
                <option>12 pieces $30.00 USD</option>
                <option>20 pieces $50.00 USD</option>
                <option>30 pieces $75.00 USD</option>
              </select>
              <hr className="line"/>
              <button className="addCart">Add to Cart</button>
            </div>
          </div>))}
      </div>
    </div>
  );
};

export default OrderNow;
