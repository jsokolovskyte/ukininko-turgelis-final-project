import React from "react";
import CartItems from "../../components/cartitems/CartItems";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./cart.css"

const Cart = () => {
    return (
        <div className="wrapper">
        {/* Header start */}
        <header className="header-container">
          <Header />
        </header>
        {/* Header end */}

        {/* Main start */}
        <main className="main-container">
          <CartItems />
        </main>
        {/* Main end */}

        {/* Footer start */}
        <footer className="footer-container">
          <Footer />
        </footer>
        {/* Footer end */}
      </div>
    )
}

export default Cart