import React, { useState } from "react";
import styles from "../src/css/Home.module.scss";
import className from "classnames/bind";
import ProductList from "./ProductList";
import Cart from "./Cart";
import OrderConfirmed from "./OrderConfirmed";

const cx = className.bind(styles);

const Home = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const handleRemoveFromCart = (name) => {
        const index = cart.findIndex((item) => item.name === name);
        if (index !== -1) {
            setCart(cart.filter((_, i) => i !== index));
        }
    };

    return (
        <div className={cx("content")}>
            <div className={cx("container")}>
                <div className={cx("product-list")}>
                    <ProductList
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        cart={cart}
                    />
                </div>
                <div className={cx("cart")}>
                    <Cart
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
