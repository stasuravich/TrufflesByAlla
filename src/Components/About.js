import {useState, useEffect} from "react";
import '../CSS/About.css';
import ProfImg from '../Photos/IMG_0361.JPG';
import CountUp from 'react-countup';
import {FcCheckmark as Check} from 'react-icons/fc';
import {RiLeafFill as LeafHeader} from 'react-icons/ri';
import {GiOakLeaf as Leaf} from 'react-icons/gi';
import VisSensor from 'react-visibility-sensor';

const About =props=>{
  //console.log("About")
  const [visible, setVisibility]=useState(false);
  const visFunc= visibility =>{
    if(!visible)
      setVisibility(visibility);
  }

  useEffect(() =>{
    document.getElementsByName("about").forEach(function(elem, idx) {elem.style.color = 'green';})
    document.title = "About - Truffles by Alla";
  }, []);

  const proof=[
    {id: 0,
    start: 4800,
    end: 5000,
    desc: "Curated Products"},
    {id: 1,
    start: 0,
    end: 800,
    desc: "Curated Products"},
    {id: 2,
    start:0,
    end: 40,
    desc: "Curated Categories"}
  ]

  const list1=[
    {id: 0,
    ingridient: "Fresh fruits"},
    {id: 1,
    ingridient: "Dry fruits"},
    {id: 2,
    ingridient: "Fresh vegetables"},
    {id: 3,
    ingridient: "Dried vegetables"},
  ]

  const list2=[
    {id: 4,
    ingridient: "Beauty products"},
    {id: 5,
    ingridient: "Milk products"},
    {id: 6,
    ingridient: "Organic honey"},
    {id: 7,
    ingridient: "Organic tea"},
  ]

  return (
    <div className="About">
      <h1 className="titleAbout">About Us</h1>
      <div className="body">
        <div className="aboutInfo">
          <span className="paragraph">
            <h2 className="topTitle">How It All Started..</h2>
            <p className="paraBody">When I was growing up, chocolate truffles were my favorite treats of all.
            They were expensive and my family could only afford to buy them on special occasions.
            When I got older I started to make my own money, but like any other girl in her older teenage years, I was now worried about my figure.
            Even though I could now afford to eat my favorite desert, I couldn’t do it as frequently as I wanted to.
            As I was in my 20s, I was becoming more and more consious about the environment, and about animals, I gave up dairy 100%.
            Everything was great besides that I couldn’t anymore have chocolate truffles, EVER!
            That’s when I started to experiment with a recipe to replicate sweet taste of nutella.
            I did’t use dairy, but also I did’t use sugar. The taste was so good, I couldn’t believe it!
            I was experimenting with recipes of different deserts, but my the most favorite experiments were with making heathy chocolate truffles.
            I invited my friends over, they were all about my chocolate truffels without any sugar or dairy!
            That’s when the idea to make Alla’s chocolate truffles for everyone was seeded.
            I named my brand simply “Truffles by Alla”. I hope you enjoy these delicious guilt-free treats as much as I do!</p>
          </span>
          <img src={ProfImg} alt="about_pic" className="aboutImg"/>
        </div>
        <LeafHeader className="titleLeafAbout"/>
        <VisSensor onChange={visFunc} minTopValue={84} partialVisibility>
          <div className="numBack">
            <div className="numbers">
              <span className="numDesc">Numbers speak for themselves!</span>
              {proof.map(item=>(
              <span key={item.id} className="digSpan">{visible ? <CountUp className="digit" separator="," start={item.start} end={item.end} duration={2.5} suffix='+'/> : item.start}
                <div>{item.desc}</div>
              </span>))}
            </div>
          </div>
        </VisSensor>
        <div className="bottomInfo">
          <img src={ProfImg} alt="about_pic" className="bottomImg"/>
          <div className="paragraph">
            <h3>Certified Products</h3>
            <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
            <h2 className="headBottom">We deal with various quality organic products!</h2>
            <Leaf className="leafAbout"/>
            <div className="perksList">
              <ul>{list1.map(list=>(
                <li key={list.id}><Check className="check"/>{list.ingridient}</li>))}
              </ul>
              <ul>{list2.map(list=>(
                <li key={list.id}><Check className="check"/>{list.ingridient}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
