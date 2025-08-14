import React from "react";
import className from "classnames/bind";
import styles from "../src/css/App.module.scss";
import Home from "./Home";
const cx = className.bind(styles);
const App = () => {
    return <Home />;
};

export default App;
