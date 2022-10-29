import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SellFilters from "../../components/sellfilters/SellFilters";
import "./sellers.css"

const Sellers = () => {
    return (
        <div className="wrapper">
        {/* Header start */}
        <header className="header-container">
          <Header />
        </header>
        {/* Header end */}

        {/* Main start */}
        <main className="main-container">
        <SellFilters />
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

export default Sellers