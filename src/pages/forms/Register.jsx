import React from "react";
import Footer from "../../components/footer/Footer";
import Sign from "../../components/forms/Sign";
import Header from "../../components/header/Header";
import './forms.css'

const Register = () => {
    return (
        <div className="wrapper">
        {/* Header start */}
        <header className="header-container">
          <Header />
        </header>
        {/* Header end */}

        {/* Main start */}
        <main className="main-container">
            <Sign />
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

export default Register