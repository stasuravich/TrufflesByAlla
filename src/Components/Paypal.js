import {useEffect, useRef} from "react";

const Paypal =props=>{

  const paypal=useRef();

  useEffect(() =>{
    window.paypal.Buttons({
      createOrder: (data, actions)=> {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: props.options[props.id].choc,
              amount: {
                currency_code: "USD",
                value: (props.options[props.id].choc==="Chocolatier Choice Assortment Box:" ? props.firstSelectOpt[props.selected.current[props.id]].money : props.selectOptions[props.selected.current[props.id]].money)
              }
            }
          ]
        })
      },
    }).render(paypal.current)
  }, []);

  return(
    <div>
      <div ref={paypal}></div>
    </div>
  )
}

export default Paypal;
