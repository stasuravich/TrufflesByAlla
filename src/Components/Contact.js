import {useEffect, useState} from "react";
import '../CSS/Contact.css';
import {Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RiLeafFill as LeafHeader} from 'react-icons/ri';
import {GiOakLeaf as Leaf} from 'react-icons/gi';
import {MdLocationOn as Location} from 'react-icons/md';
import {IoMdArrowDropright as Arrow} from 'react-icons/io';

const Contact =props=>{
  console.log("Contact")
  const [activeIds, setActiveIds] = useState([]);
  useEffect(() =>{
    document.getElementById("contact").style.color="green";
    document.title = "Contact - Truffles by Alla";
  }, []);

  const tabs1 = [
    { id: 1, label: "Are the truffles vegan?",
      description: "Yes, they are. They are made in a vegan kitchen." },
    { id: 2, label: "Is there a cross-contamination with any allergic products?",
      description: "The truffles are made in dairy-free and soy-free kitchen. However, many of the recipes use nuts, such as almonds and hazelnuts. If you have a nut allergy, please, read the ingridients carefully when you order." },
    { id: 3, label: "How many calories are in one piece?",
      description: "Please refer to the description page, that’s where all the nutrition facts are listed." }
  ];
  const tabs2 = [
    { id: 4, label: "Would you deliver for free if I live just outside of Los Angeles County?",
      description: "Please contact me by email through the Contact page." },
    { id: 5, label: "Do you cater?",
      description: "Yes, catering is one of the offered services. Please refer to the Contact page and email me with your special request." },
    { id: 6, label: "Are the truffles raw?",
      description: "Some of the recipes are and some are’t. The only reason some of them aren’t is because I roast the nuts." }
  ];

  const toggle=id =>{
    if (activeIds.includes(id)) {
      setActiveIds(activeIds.filter((item)=> item !== id));
    } else {
      setActiveIds(activeIds.concat(id));
    }
  }

  return (
    <div className="Contact">
      <h1 className="contactTitle">Get In Touch</h1>
      <div className="contactInfo">
        <span>trufflesbyalla@gmail.com</span>
        <span><Location className="location"/>Huntington Beach, CA, USA</span>
      </div>
      <LeafHeader className="titleLeaf"/>
      <h2 className="faqTitle">Frequetly Asked Questions!</h2>
      <Leaf className="leaf"/>
      <div className="questions" >
        <div className="accordionHalf">
          {tabs1.map(tab=>(
          <Accordion key={tab.id}>
            <Accordion.Toggle className={activeIds.includes(tab.id) ? "toggleOpen" : "toggle"} eventKey={tab.id} onClick={() => toggle(tab.id)}>
              <span className="be4Icon">{tab.label}</span><Arrow className={activeIds.includes(tab.id) ? "arrowOpen" : "arrow"}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={tab.id}>
              <span>{tab.description}</span>
            </Accordion.Collapse>
            <hr className="lineContact"/>
          </Accordion>))}
        </div>
        <div className="accordionHalf">
          {tabs2.map(tab=>(
          <Accordion key={tab.id}>
            <Accordion.Toggle className={activeIds.includes(tab.id) ? "toggleOpen" : "toggle"} eventKey={tab.id} onClick={() => toggle(tab.id)}>
            <span className="be4Icon">{tab.label}</span><Arrow className={activeIds.includes(tab.id) ? "arrowOpen" : "arrow"}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={tab.id}>
              <span>{tab.description}</span>
            </Accordion.Collapse>
            <hr className="lineContact"/>
          </Accordion>))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
