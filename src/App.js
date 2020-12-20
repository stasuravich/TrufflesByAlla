import {useState} from 'react';
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
import FooterPhoto from './Photos/IMG-4575.jpg';
import {GiHamburgerMenu as Ham} from 'react-icons/gi';
import {AiOutlineClose as Close} from 'react-icons/ai';
import {Navbar, Nav} from 'react-bootstrap';

function App() {
  const [navIcon, setNavIcon]= useState(false);
  console.log("App");

  const underBar=[
    {id: "home",
    href: "/",
    page: "Home"},
    {id: "menu",
    href: "/menu",
    page: "Menu"},
    {id: "myAccount",
    href: "/my-account",
    page: "My account"},
    {id: "orderNow",
    href: "/order-now",
    page: "Order now"},
    {id: "contact",
    href: "/contact",
    page: "Contact"},
    {id: "about",
    href: "/about",
    page: "About"}
  ]

  return (
    <div className="App">
      <div className="header">
        <div className="content">
          <Navbar bg="#cdd3a7" expand="lg">
            <Navbar.Toggle onClick={()=>setNavIcon(!navIcon)}>
              <span className="icon">{!navIcon ? <Ham/> : <Close/>}</span>
            </Navbar.Toggle>
            <a className="cartContainer" href="/order-now"><Bag className="cart" /></a>
            <Navbar.Collapse id="basic-navbar-nav">
            {underBar.map((item, idx)=>(
              <Nav.Link key={idx} className="elem" name={item.id} href={item.href}>{item.page}</Nav.Link>))}
            </Navbar.Collapse>
          </Navbar>
          <a className="truffles" href="/">Truffles by Alla</a>
        </div>
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
        <img src={FooterPhoto} alt="Footer" className="footerPhoto"></img>
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
