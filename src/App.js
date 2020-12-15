import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {BiShoppingBag as Bag} from 'react-icons/bi';
import Home from './Components/Home';
import Menu from './Components/Menu';
import MyAccount from './Components/MyAccount';
import OrderNow from './Components/OrderNow';
import Contact from './Components/Contact';
import About from './Components/About';
import LostPassword from './Components/LostPassword';
import footerPhoto from './Photos/IMG-4575.jpg';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="navBar">
          <div className="Links1">
            <a className="cart" href="/order-now"><Bag/></a>
            <a id="home" href="/">Home</a>
            <a id="menu" href="/menu">Menu</a>
            <a id="myAccount" href="/my-account">My account</a>
            <a id="orderNow" href="/order-now">Order now</a>
            <a id="contact" href="/contact">Contact</a>
            <a id="about" href="/about">About</a>
          </div>
          <div className="Links2">
            <a className="truffles" href="/">Truffles by Alla</a>
          </div>
        </div>
        <hr className="lineHeader"/>
      </div>
      <Router>
        <Switch>
          <Route path="/my-account/lost-password" component={LostPassword}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/my-account" component={MyAccount}/>
          <Route path="/order-now" component={OrderNow}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
      <div className="footer">
        <img src={footerPhoto} alt="Footer" className="footerPhoto"></img>
        <hr className="line"/>
        <div className="footContainer">
          <span>Copyright © 2020 | Truffles by Alla</span>
          <span>Social media links that dont work</span>
        </div>
      </div>
    </div>
  );
}

export default App;
