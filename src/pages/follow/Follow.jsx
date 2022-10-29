import React from "react";
import FollowCustomer from "../../components/followcustomer/FollowCustomer";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./follow.css"

const Follow = () => {
    return (
        <div className="wrapper">
        {/* Header start */}
        <header className="header-container">
          <Header />
        </header>
        {/* Header end */}

        {/* Main start */}
        <main className="main-container">
          <FollowCustomer />
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

export default Follow