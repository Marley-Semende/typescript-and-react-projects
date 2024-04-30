import "./App.css";
import logo from "./images/logo.svg";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const buttonsLabel = ["About", "Careers", "Events", "Products", "Support"];
  return (
    <div className="app">
      <Header logo={logo} buttonsLabel={buttonsLabel} />
      <MainContent />
      <Footer logo={logo} buttonsLabel={buttonsLabel} />
    </div>
  );
}

export default App;
