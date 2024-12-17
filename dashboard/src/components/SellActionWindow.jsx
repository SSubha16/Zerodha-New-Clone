import React, { useContext, useState } from "react";
import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import { Link } from "react-router-dom";





const SellActionWindow = ({uid,curr,id,qty})=> {

  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(qty);
  const [stockPrice, setStockPrice] = useState(qty*curr);

  const handleCancelClick =()=>{
  generalContext.closeSaleWindow();
} 

const values = (e) =>{
    if(e.target.value>=0 && e.target.value<=qty)
  {
    setStockQuantity(e.target.value);
    setStockPrice(e.target.value*curr);
  }
}

const handleSellClick=()=>{

  axios.delete(`https://zerodha-new-clone.onrender.com/delete/${id}`);
  generalContext.closeSaleWindow();

}


    return (
        <div className="container" id="sell-window" draggable="true">
          <div className="regular-order">
            <div className="inputs">
              <fieldset>
                <legend>Qty.</legend>
                <input
                  type="number"
                  name="qty"
                  id="qty"
                  onChange={values}
                  value={stockQuantity}
                />
              </fieldset>
              <fieldset>
                <legend>Price</legend>
                <input
                  type="number"
                  name="price"
                  id="price"
                  step="0.05"
                  value= {stockPrice}  
                />
              </fieldset>
            </div>
          </div>
    
          <div className="buttons">
            <span>Margin required ₹140.65</span>
            <div>
              <Link className="btn btn-red" onClick={handleSellClick}>
                Sell
              </Link>
              <Link to ="" className="btn btn-grey" onClick={handleCancelClick}>
                Cancel
              </Link>
            </div>
          </div>
        </div>
      );    
} 
 export default SellActionWindow;