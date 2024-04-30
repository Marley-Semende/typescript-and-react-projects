function Header({ logo, buttonsLabel }) {
  return (
    <div className="header">
      <div className="logo-btns">
        <img src={logo} alt="looopstudios logo" />
        <div className="btns-wrapper">
          {buttonsLabel.map((button, index) => (
            <button key={index}>{button}</button>
          ))}
        </div>
      </div>
      <div className="main-title">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </div>
  );
}

export default Header;
