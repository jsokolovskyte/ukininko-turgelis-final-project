import { faEye, faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store";

const CartItems = () => {

    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem("userInfo")){
            localStorage.getItem("userInfo");
            navigate("/");
        }
    });

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: {cartItems} } = state;


    const totalItems = cartItems.reduce((a, c) => a + c.quantity, 0) + '/items';
    const roundPrice = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
    const itemsPrice = roundPrice(cartItems.reduce((a ,c) => a + c.quantity * c.price, 0));
    const taxPrice = roundPrice(0.21 * itemsPrice);
    const totalPrice = itemsPrice + taxPrice;


    const updateQuantityHandler = async (item, quantity) => {

        ctxDispatch({
            type: "CART_ADD_ITEM",
            payload: { ...item, quantity}
        })

    }

    const removeProduct = (item) => {
        ctxDispatch({
            type: "CART_REMOVE_ITEM",
            payload: item
        })
    }

    return (
        <div className="cart-row">
            <h2 className="cart-title">My Cart</h2>
            <div className="cart-items">
                <div className="cart-col">
                {cartItems.length === 0 ? (<h2 className="info">Your Cart is Empty. </h2>) : (
                    <div className="cart-cards">
                        {cartItems.map((item) => (
                            <div className="filter-card" key={item._id}>
                                <div className="card-header">
                                    <img src={item.image} alt={item.name} />
                                    <Link to={`../seller/${item.sellerId}`}> <img className="card-sellers" src={item.sellerImage} alt="" /></Link>
                                </div>
                                <div className="card-body">
                                    <Link to={`../${item.slug}`}>{item.name} <FontAwesomeIcon icon={faEye} /></Link>
                                    <span className="category"> {item.category}</span>
                                    <span className="price"> {Number(item.price).toFixed(2)}(€/kg)</span>
                                </div>
                                <div className="card-action">
                                    <button onClick={() => updateQuantityHandler(item, item.quantity - 1)} disabled={item.quantity === 1}><FontAwesomeIcon icon={faMinusCircle} /></button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button onClick={() => updateQuantityHandler(item, item.quantity + 1)}><FontAwesomeIcon icon={faPlusCircle} /></button>
                                </div>
                                <div className="card-footer-cart">
                                    <button onClick={() => removeProduct(item)}>Remove</button>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
                </div>

                <div className="cart-col">
                    <div className="cart-bill">
                        <h2 className="bill-title">My Bill</h2>
                        {cartItems.length === 0 ? (<h2 className="info">No Products!</h2>) : (
                        <div className="bill-groups">
                            {cartItems.map((product) => (
                            <div className="bill-group" key={product._id}>
                                <span>{product.name}</span>
                                <span>{(product.price).toFixed(2)}€</span>
                            </div>
                            ))}
                        </div>
                        )}
                        <div className="bill-total">
                            <div className="bill-group">
                                <span>SubTotal:</span>
                                <span>{totalItems} - {itemsPrice}€</span>
                            </div>

                            <div className="bill-group">
                                <span>Tax 21%:</span>
                                <span>{taxPrice} €</span>
                            </div>

                            <div className="bill-group">
                                <h3>Total:</h3>
                                <h2>{totalPrice.toFixed(2)}€</h2>
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