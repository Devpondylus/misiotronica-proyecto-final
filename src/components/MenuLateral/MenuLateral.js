import { Link } from 'react-router-dom';
import "./MenuLateral.css";

const MenuLateral = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/SobreNosotros">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/Venta">Venta</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuLateral;