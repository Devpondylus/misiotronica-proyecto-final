import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

import "./Products.css";

const Products = () => {
    const { data, buyProducts } = useContext(dataContext);

    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt="img-product" />
                <h3>{product.nombre}</h3>
                <h4>{product.precio}$</h4>
                <button onClick={() => buyProducts(product)}>Comprar</button>
            </div>
        );
    });
};

export default Products;