import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acc,el) => acc + el.precio * el.cantidad, 0);
    return (
        <div className="cartTotal">
            <h3>Total: {total} $</h3>
        </div>
    );
};

export default CartTotal;