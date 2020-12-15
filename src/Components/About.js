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
    document.getElementById("about").style.color="green";
  });



  return (
    <div className="About">
      <h1 className="titleAbout">About Us</h1>
      <div className="aboutInfo">
        <span className="paragraph">
          <h2 className="topTitle">How It All Started..</h2>
          <p>When I was growing up, chocolate truffles were my favorite treats of all.
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
      <VisSensor onChange={visFunc} minTopValue={30} partialVisibility>
        <div className="numbers">
          <span className="numDesc">Numbers speak for themselves!</span>
          <span>{visible ? <CountUp className="digit" separator="," start={4800} end={5000} duration={2.5} suffix='+'/> : 4800}
            <div>Curated Products</div>
          </span>
          <span>{visible ? <CountUp className="digit" start={0} end={800} duration={2.5} suffix='+'/> : 0}
            <div>Curated Products</div>
          </span>
          <span>{visible ? <CountUp className="digit" start={0} end={40} duration={2.5} suffix='+'/> : 0}
            <div>Product Categories</div>
          </span>
        </div>
      </VisSensor>
      <div className="aboutInfo">
        <img src={ProfImg} alt="about_pic" className="aboutImg"/>
        <div className="paragraph">
          <h3>Certified Products</h3>
          <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
          <h2 className="headBottom">We deal with various quality organic products!</h2>
          <Leaf className="leafAbout"/>
          <div className="perksList">
            <ul>
              <li><Check className="check"/>Fresh fruits</li>
              <li><Check className="check"/>Dry fruits</li>
              <li><Check className="check"/>Fresh vegetables</li>
              <li><Check className="check"/>Dried vegetables</li>
            </ul>
            <ul>
              <li>Beauty products</li>
              <li>Milk products</li>
              <li>Organic honey</li>
              <li>Organic tea</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
