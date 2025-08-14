import React from "react";
import styles from "../src/css/ProductList.module.scss";
import className from "classnames/bind";
import dataSource from "./assets/images/data.json";
import Product from "./Product";

const cx = className.bind(styles);

const ProductList = ({ cart, handleAddToCart, handleRemoveFromCart }) => {
    return (
        <div className={cx("container")}>
            <h2>Desserts</h2>
            <div className={cx("product-wrapper")}>
                {dataSource.map((item) => (
                    <Product
                        key={item.name}
                        image={item.image.desktop}
                        name={item.name}
                        category={item.category}
                        price={item.price}
                        handleAddToCart={() => handleAddToCart(item)}
                        handleRemoveFromCart={() =>
                            handleRemoveFromCart(item.name)
                        }
                        cart={cart}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
