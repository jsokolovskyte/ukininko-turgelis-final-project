import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

const SellerInfo = () => {

    //to find user's id
    const location = useLocation();
    // console.log(location);
    const id = location.pathname.split(":")[1];
    console.log(id)

    const {seller, reFetch} = useFetch(`/api/users/${id}`)
    console.log(seller);

    return (
        <div className="seller-row">
            <div className="seller-col">
                <div className="seller-info">
                    <div className="seller-header">
                        <img src={seller.image} alt={seller.name} />
                    </div>
                    <div className="seller-body">
                        <span>{seller.name}</span>
                        <span>{seller.email}</span>
                        <span>{seller.address}</span>
                        <span>{seller.phone}</span>
                    </div>
                    <div className="seller-footer">
                        <span className="follow"> Follow</span>
                    </div>
                </div>
            </div>

            <div className="seller-col">
                <h2 className="seller-title">All products of the Seller {seller.name}</h2>
                <div className="seller-products">
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
                            <button>Add to cart</button>

                        </div>
                    </div>

                    <div className="filter-card">
                        <div className="card-header">
                            <img src="./assets/images/products/tomato.png" alt="" />
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
        </div>
    )
}

export default SellerInfo
