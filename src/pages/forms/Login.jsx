import React from "react";
import Footer from "../../components/footer/Footer";
import SignIn from "../../components/forms/SignIn";
import Header from "../../components/header/Header";
import './forms.css'

const Login = () => {
    return (
        <div className="wrapper">
        {/* Header start */}
        <header className="header-container">
          <Header />
        </header>
        {/* Header end */}

        {/* Main start */}
        <main className="main-container">
            <SignIn />
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

export default Login