import React, { useState, useEffect } from "react";
import styles from "../src/css/Home.module.scss";
import className from "classnames/bind";
import ProductList from "./ProductList";
import Cart from "./Cart";

const cx = className.bind(styles);

const Home = () => {
    const [cart, setCart] = useState([]);
    const [isShowScroll, setShowScrollTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        });
    }, []);

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const handleRemoveFromCart = (name) => {
        const index = cart.findIndex((item) => item.name === name);
        if (index !== -1) {
            setCart(cart.filter((_, i) => i !== index));
        }
    };
    console.log(isShowScroll);

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
            {isShowScroll && (
                <button
                    className={cx("scroll-to-top")}
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Home;
