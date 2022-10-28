import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Latest = () => {
    return (
        <div className="latest-row">
            <div className="latest-col">
                <h2>new fresh products</h2>
                <div className="latest-products">
                    <div className="latest-group">
                        <div className="latest-header">
                            <img src="./assets/images/products/melon.png" alt="" />
                        </div>
                        <div className="latest-body">
                            <Link to="/">Melon <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 0.89(€/kg)</span>
                            
                        </div>
                    </div>

                    <div className="latest-group">
                        <div className="latest-header">
                            <img src="./assets/images/products/tomato.png" alt="" />
                        </div>
                        <div className="latest-body">
                            <Link to="/">Tomato <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.99(€/kg)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latest-col">
                <h2>newly registered sellers. check them out!</h2>
                <div className="latest-sellers">
                    <div className="sellers-group">
                        <div className="sellers-header">
                            <img src="./assets/images/sellers/person1.png" alt="" />
                        </div>
                        <div className="sellers-body">
                            <Link to="/">Kotryna Kartutė <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="follow"> Follow</span>
                            <span className="date">Member since: 2022.11.01</span>
                            
                        </div>
                    </div>

                    <div className="sellers-group">
                        <div className="sellers-header">
                            <img src="./assets/images/sellers/person2.png" alt="" />
                        </div>
                        <div className="sellers-body">
                            <Link to="/">Sigita Sagutė <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="follow"> Follow</span>
                            <span className="date">Member since: 2022.10.31</span>
                            
                        </div>
                    </div>

                    <div className="sellers-group">
                        <div className="sellers-header">
                            <img src="./assets/images/sellers/seller3.png" alt="" />
                        </div>
                        <div className="sellers-body">
                            <Link to="/">Zigmas Žiogas <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="follow"> Follow</span>
                            <span className="date">Member since: 2022.10.31</span>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Latest