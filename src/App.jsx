import React from "react";
import  Footer  from "./Components/Footer";
import PixabayC from "./Components/PixabayC";
import "./style.css";

let App = () => {
    return (
    <React.StrictMode>
        <PixabayC/>
        <Footer/>
    </React.StrictMode>
    )
}
export default App;