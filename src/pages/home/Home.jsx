import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./home.css";
import Slider from "../../components/slider/Slider";

const Home = () => {
    return (
        <div className="wrapper">
        {/* Header start */}
        <header className="header-container">
          <Header />
        </header>
        {/* Header end */}

        {/* Main start */}
        <main className="main-container">
          <Slider />
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

export default Home