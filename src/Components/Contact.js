import {useEffect} from "react";
import '../CSS/Contact.css';
import {Accordion, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RiLeafFill as LeafHeader} from 'react-icons/ri';
import {GiOakLeaf as Leaf} from 'react-icons/gi';
import {MdLocationOn as Location} from 'react-icons/md'

const Contact =props=>{

  useEffect(() =>{
    document.getElementById("contact").style.color="green";
    document.title = "Contact - Truffles by Alla";
  });

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
    { id:5, label: "Do you cater?",
      description: "Yes, catering is one of the offered services. Please refer to the Contact page and email me with your special request." },
    { id: 6, label: "Are the truffles raw?",
      description: "Some of the recipes are and some are’t. The only reason some of them aren’t is because I roast the nuts." }
  ];

  return (
    <div className="Contact">
      <h1 className="contactTitle">Get In Touch</h1>
      <div className="contactInfo">
        <span>trufflesbyalla@gmail.com</span>
        <span><Location className="location"/>Huntington Beach, CA, USA</span>
      </div>
      <LeafHeader className="titleLeaf"/>
      <h2>Frequetly Asked Questions!</h2>
      <Leaf className="leaf"/>
      <div className="questions" >
        <div className="accordion">
          {tabs1.map(tab=>(
          <Accordion key={tab.id}>
            <Card>
              <Card.Header>
                <Accordion.Toggle className="toggle" as={Button} variant="link" eventKey="0">
                  {tab.label}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{tab.description}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>))}
        </div>
        <div className="accordion">
          {tabs2.map(tab=>(
          <Accordion key={tab.id}>
            <Card>
              <Card.Header>
                <Accordion.Toggle className="toggle" as={Button} variant="link" eventKey="0">
                  {tab.label}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{tab.description}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
