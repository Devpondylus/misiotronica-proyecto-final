/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../Context/dataContext";

import TotalItems from "../CartContent/TotalItems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import "./Menu.css";

const Menu = () => {
    const { cart } = useContext(dataContext);
    return (
        <div className="menu-container">
            <nav className="menu">
                <FontAwesomeIcon icon={faBars} />
                <Link to={"/"}>
                    <div className="menu-logo">
                        <img src="/img/misiotronicaviolet.png" alt="Misiotrónica" />
                    </div>
                </Link>
                <Link className="verCarrito" to={"/cart"}>
                    🛒
                    {cart.length > 0 ? <TotalItems /> : null}
                </Link>
            </nav>
        </div>
    );
};

export default Menu;