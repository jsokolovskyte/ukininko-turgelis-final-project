import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPhone, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import '../../pages/home/home.css'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-row">
            <div className="header-top">
                <span><FontAwesomeIcon icon={faPhone}/> +37061234567</span>
                <span><FontAwesomeIcon icon={faEnvelope}/> ukininko@turgelis.lt</span>
            </div>
            <div className="header-menu">
                <div className="header-logo">
                    <Link to="/"><h2 className="header-logo-title"> Ūkininko turgelis</h2></Link>
                </div>

                <div className="header-nav">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/shop" activeClassName="active">Shop</NavLink>
                    <NavLink to="/sellers" activeClassName="active">Sellers</NavLink>
                </div>

                <div className="header-action">
                    <Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} /><span className="header-cart-badge">0</span></Link>

                    <Link to="/login"><FontAwesomeIcon icon={faLock} />Login</Link>

                </div>
            </div> 
        </div>
    )
}

export default Header