import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
//import { BackspaceTwoTone } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket?.length} items):
              <strong> {value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeperator={true}
        prefix={"£ "}
      />
      <button> Proceed to Checkout </button>
    </div>
  );
}

export default Subtotal;
