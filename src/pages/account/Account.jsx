import React from "react";
import AccountUser from "../../components/accuser/AccountUser";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./account.css";

const Account = () => {
    return (
        <div className="wrapper">
        {/* Header start */}
        <header className="header-container">
          <Header />
        </header>
        {/* Header end */}

        {/* Main start */}
        <main className="main-container">
          <AccountUser />
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

export default Account