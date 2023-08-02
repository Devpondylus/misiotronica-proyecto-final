import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

const TotalItems = () => {
    const { cart } = useContext(dataContext);

    const itemsQuanty = cart.reduce((acc, el) => acc + el.cantidad, 0);
    return <span className="cart-items-total"> {itemsQuanty} </span>;
};

export default TotalItems;