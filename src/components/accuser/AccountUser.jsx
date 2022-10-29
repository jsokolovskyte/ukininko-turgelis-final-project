import { faEye, faPencil, faRefresh, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const AccountUser = () => {
    return (
        <div className="account-row">
            <h1 className="account-title">My Account</h1>
            <div className="account-groups">
                <div className="account-group">
                    <img src="./assets/images/sellers/person2.png" alt="" />
                    <button className="account-image">Change Image</button>
                    <div className="form-row">

                    <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="Sigita Sagutė"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="ukininkas@manoukis.lt"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" placeholder="Lauku g., 1, Laukuva"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" id="phone" placeholder="+37061111111" />
                        </div>
                        <div className="form-btn">
                            <button><FontAwesomeIcon icon={faRefresh} /> Update</button>
                        </div>
                    </div>

                </div>

                <div className="account-group">
                    <h2 className="account-subtitle">My Products</h2>
                    <div className="account-products">
                    <div className="filter-cards">
                <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/melon.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Melon <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 1.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>

                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/tomato.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Tomato <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.99(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/apple.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Apple <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 0.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/beetroot.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Beetroot <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/carrot.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Carrot <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.39(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/cucumber.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Cucumber <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.79(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/potato.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Potato <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.39(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/pumpkin.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Pumpkin <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 0.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/strawberry.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Strawberry <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 1.49(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/pear.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Pear <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Fruit</span>
                            <span className="price"> 0.89(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/lettuce.png" alt="" />
                        </div>
                        <div className="card-body">
                            <Link to="/">Lettuce <FontAwesomeIcon icon={faEye} /></Link>
                            <span className="category"> Vegetable</span>
                            <span className="price"> 1.39(€/kg)</span>
                        </div>
                        <div className="card-footer">
                            <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                            <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
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

                    <h2 className="account-subtitle">My Orders</h2>
                    <div className="account-orders">
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 2242342342 <Link to="/"> <FontAwesomeIcon icon={faEye} /></Link></h4>
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
        </div>
    )
}

export default AccountUser