import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLock, faPhone, faShoppingBag, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import '../../pages/home/home.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Store } from "../../Store";

const Header = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo");

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, wish } = state

    const signouthandler = () => {
        localStorage.removeItem("userInfo");
        alert("You have logged out");
        navigate("/login");
    }

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

                    {userInfo && (
                        <>
                            <Link to="/account"><FontAwesomeIcon icon={faHome}/></Link>
                            <Link to="/follow"><FontAwesomeIcon icon={faUser} /> {wish.wishItems.length ? (<span className="header-cart-badge"> {wish.wishItems.length}</span>) : (<span className="header-cart-badge"> 0 </span>)}</Link>
                            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /><span className="header-cart-badge">0</span></Link>
                        </>
                    )}

                    {
                        userInfo ? (<span className="logout" to="#signout" onClick={signouthandler}><FontAwesomeIcon icon={faLock} />Logout</span>) : (<Link to="/login"><FontAwesomeIcon icon={faLock} />Login</Link>)
                    }

                </div>
            </div> 
        </div>
    )
}

export default Header