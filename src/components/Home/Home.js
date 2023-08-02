import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import MenuLateral from "../MenuLateral/MenuLateral";

const Home = () => {
    return (
        <>
            <Menu />
            <MenuLateral />
            <Banner />
            <div className="product-card-container">
                <Products />
            </div>
        </>
    );
};

export default Home;