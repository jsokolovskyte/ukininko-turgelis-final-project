import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Filter = () => {
    return (
        <div className="filter-row">
            <div className="filter-col">
                <div className="filter-group">
                    <button>All</button>
                    <button>Fruits</button>
                    <button>Vegetables</button>

                </div>

                <div className="filter-group">
                    <input type="search" placeholder="Search..." />
                    <button> <FontAwesomeIcon icon={faSearch} /> </button>
                </div>
            </div>

            <div className="filter-col">
                <div className="filter-cards">
                <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/melon.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/person1.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Melon <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 1.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>

                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/tomato.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/person4.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Tomato <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.89(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/apple.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/person2.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Apple <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 0.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/beetroot.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/person1.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Beetroot <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/carrot.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/seller3.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Carrot <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.39(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/cucumber.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/seller3.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Cucumber <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.79(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/potato.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/person2.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Potato <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.39(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/pumpkin.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/person4.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Pumpkin <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/strawberry.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/person1.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Strawberry <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 1.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/pear.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/seller3.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Pear <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 0.89(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/lettuce.png" alt="" />
                            <Link to="/"> <img className="card-sellers" src="./assets/images/sellers/person4.png" alt="" /></Link>
                        </div>
                        <div className="card-body">
                            <Link to="/">Lettuce <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 1.39(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="filter-pagination">
                    <ul>
                        <li ><Link to="#">Prev</Link></li>
                        <li className="pagi-active"><Link to="#">1</Link></li>
                        <li ><Link to="#">Next</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filter