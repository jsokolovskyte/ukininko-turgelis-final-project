import { faEye, faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CartItems = () => {
    return (
        <div className="cart-row">
            <h2 className="cart-title">My Cart</h2>
            <div className="cart-items">
                <div className="cart-col">
                    <div className="cart-cards">

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
                        <div className="card-action">
                            <button><FontAwesomeIcon icon={faMinusCircle} /></button>
                            <span className="quantity">1</span>
                            <button><FontAwesomeIcon icon={faPlusCircle} /></button>
                        </div>
                        <div className="card-footer-cart">
                            <button>Remove</button>

                        </div>
                    </div>
                    </div>
                </div>

                <div className="cart-col">
                    <div className="cart-bill">
                        <h2 className="bill-title">My Bill</h2>

                        <div className="bill-groups">
                            <div className="bill-group">
                                <span>Melon</span>
                                <span>1.49€</span>
                            </div>

                            <div className="bill-group">
                                <span>Melon</span>
                                <span>1.49€</span>
                            </div>
                        </div>
                        <div className="bill-total">
                            <div className="bill-group">
                                <span>SubTotal:</span>
                                <span>13.00€</span>
                            </div>

                            <div className="bill-group">
                                <span>Tax 20%:</span>
                                <span>3.00€</span>
                            </div>

                            <div className="bill-group">
                                <h3>Total:</h3>
                                <h3>16.00€</h3>
                            </div>
                        </div>

                        <div className="bill-btn">
                            <button>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems