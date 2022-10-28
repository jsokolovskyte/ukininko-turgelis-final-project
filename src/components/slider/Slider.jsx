import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div className="slider-row">
            <div className="slider-col">
                <img src="./assets/images/veggies.png" alt="" />
            </div>
            <div className="slider-col">
                <h2>plenty of local farmers of lithuania sell organic and ecological fruits and vegetables at the best prices. </h2>
                <Link to="/shop"><FontAwesomeIcon icon={faEye}/> view shop </Link>
            </div>
        </div>
    )
}

export default Slider