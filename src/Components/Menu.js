import {useEffect} from "react";
import '../CSS/Menu.css';

const Menu =props=>{

  useEffect(() =>{
    document.getElementsByName("menu").forEach(function(elem, idx) {elem.style.color = 'green';})
    document.title = "Menu - Truffles by Alla";
  }, []);

  return (
    <div className="Menu">
      <h1 className="title">Flavors:</h1>
      <div className="flavors">
        <span>Coconut Caramel Truffles</span>
        <span>Caffè Mocha Truffles</span>
        <span>Pistachio Cherry Truffles</span>
        <span>Hazelnut Truffles</span>
        <span>Chocolate Truffles</span>
        <span>Espresso Macchiato Truffles</span>
      </div>
      <h1 className="title">Assortment boxes:</h1>
    </div>
  );
};

export default Menu;
