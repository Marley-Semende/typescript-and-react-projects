import { useState, useEffect } from "react";
import "./App.css";
import logo from "./images/logo.svg";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const buttonsLabel = ["About", "Careers", "Events", "Products", "Support"];

  useEffect(() => {
    // Check if the window width is less than or equal to 768 pixels
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //state handler
  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="app">
      {isMobile && (
        <BurgerMenu
          buttonsLabel={buttonsLabel}
          isOpen={menuOpen}
          onStateChange={handleStateChange}
        />
      )}
      <Header logo={logo} buttonsLabel={buttonsLabel} />
      <MainContent />
      <Footer logo={logo} buttonsLabel={buttonsLabel} />
    </div>
  );
}

export default App;
