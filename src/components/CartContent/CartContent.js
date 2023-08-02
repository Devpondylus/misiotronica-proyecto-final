import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import Menu from "../Menu/Menu";

import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Menu />
      {cart.length > 0 ? (
        <>
          <CartElements />;
          <CartTotal />;
        </>
      ) : (
        <h2 className="cart-message-center">Su carrito se encuentra vacío.</h2>
      )}
    </>
  );
};

export default CartContent;