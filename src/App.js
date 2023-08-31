import { BrowserRouter, Routes, Route } from "react-router-dom";

import DataProvider from "./components/Context/dataContext";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import MenuLateral from "./components/MenuLateral/MenuLateral";
import CartContent from "./components/CartContent/CartContent";
import Inexistente from "./components/Pages/Inexistente/Inexistente";
import Contacto from "./components/Pages/Contacto";
import SobreNosotros from "./components/Pages/SobreNosotros"

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Menu />
      <MenuLateral />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Inexistente />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;