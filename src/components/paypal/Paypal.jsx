import React , {useState}from "react";
import {PayPalScriptProvider , PayPalButtons } from "@paypal/react-paypal-js";
import { Navigate, useNavigate } from "react-router-dom";

const Paypal = (props) => {
    const {product} = props;
    const [paidFor,setPaidFor] = useState(false);
    const [error ,setError] =useState(null);
    const navigate =useNavigate();
    const handleApprove=(orderID)=>{
        setPaidFor(true);
    }

    if(paidFor){
        navigate("/");
    }

    if(error){
      alert(error);
    }

  return ( 
    <PayPalScriptProvider>
      <PayPalButtons 
          createOrder={(data,action)=>{
              return action.order.create({
                purchase_units : [
                  {
                    "description" : product.description,
                    amount :{
                      currency_code: "USD",
                      value:product.price
                    },
                  },
                ],
              });            
          }}

          onApprove= {async(data,action)=>{
            const order = await action.order.capture();
            console.log("order", order);

            handleApprove(data.orderID);
          }}

          onCancel={()=>{}}
          onError={(error)=>{
            setError(error);
            console.log("Paypal checkout error ",error);
          }}
      />
    </PayPalScriptProvider>
   );
}
 
export default Paypal;