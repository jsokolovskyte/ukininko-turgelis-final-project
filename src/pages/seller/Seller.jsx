import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SellerInfo from "../../components/seller/SellerInfo"
import "./seller.css";

const Seller = () => {
    return (
        <div className="wrapper">
        {/* Header start */}
        <header className="header-container">
          <Header />
        </header>
        {/* Header end */}

        {/* Main start */}
        <main className="main-container">
          <SellerInfo />
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

export default Seller