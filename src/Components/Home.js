import {useEffect} from "react";
import ProfImg from '../Photos/IMG_0361.JPG';
import '../CSS/Home.css';
import {GiOakLeaf as Leaf} from 'react-icons/gi';
import {AiFillStar as Star} from 'react-icons/ai'

const Home =props=>{
  useEffect(() =>{
    document.getElementById("home").style.color="green";
  });

  const perks = [
    { id: 0, label: "Free Delivery",
      description: "in Los Angeles area (on all orders $35+)" },
    { id: 1, label: "100% Organic",
      description: "highest quality ingredients" },
    { id: 2, label: "Large Box Deals",
      description: "custom boxes for different occasions" },
    { id: 3, label: "Homemade in Certified Kitchen",
      description: "& made with love <3" }
  ];

  const reviews= [
    {id: 0,
      stars: [...Array(5)].map((_, i) =><Star key={i} className="star"/>),
      quote: '"...So good, and no sugar, WOW!"',
      name: "Ineta Pranauskaite"},
    {id: 1,
      stars: [...Array(5)].map((_, i) =><Star key={i} className="star"/>),
      quote: '"Me and my husband just had one and we loved it. He also said they are "sehr gut!":)"',
      name: "Corinna Breitinger"},
    {id: 2,
      stars: [...Array(5)].map((_, i) =><Star key={i} className="star"/>),
      quote: '"Seriously the yummiest truffles ever!"',
      name: "	Aiste Mikuckis"}
  ]
  return (
    <div className="Home">

      <div className="imgDesc">
        <img src={ProfImg} alt="profile_pic" className="profileImg"/>
        <div className="description">
          <h2 className="smallTitle">All NATURAL INGRIDIENTS</h2>
          <h1 className="bigTitle">Organic Vegan Chocolate Truffles</h1>
          <span className="addText">So delicious, you won't believe they are also so healthy, but it's true, they are!</span>
          <br/><br/><br/><br/>
          <a className="expFlav" href="/menu">EXPLORE THE FLAVORS</a>
        </div>
      </div>
      <div className="perksContainer">
      {perks.map(perk=>(
        <div key={perk.id} className="perk">
          <div><Leaf className="leafHome"/></div>
          <div>
            <h2>{perk.label}</h2>
            <span>{perk.description}</span>
          </div>
        </div>))}
      </div>
      <div>
        <h1 className="reviewsTitle">Costumer Reviews...</h1>
        <div className="reviews">
        {reviews.map(review=>(
          <div key={review.id} className="review">
            <p>{review.stars}</p>
            <p className="reviewQuote">{review.quote}</p>
            <p className="name">{review.name}</p>
          </div>
        ))}
        </div>
      </div>
      <br/><br/>
      <div className="quote">Eat healthy, be healthy, think healthy (because HEALTHY can be sooo delicious)!</div>
    </div>
  );
};

export default Home;
