import React from "react";
import Header from "../../components/header/Header";
import "./home.css";

const Home = () => {
    return (
        <div className="wrapper">
        {/* Header start */}
        <header className="header-container">
          <Header />
        </header>
        {/* Header end */}

        {/* Main start */}
        <main>
          Main
        </main>
        {/* Main end */}

        {/* Footer start */}
        <footer>
          Footer
        </footer>
        {/* Footer end */}
      </div>
    )
}

export default Home