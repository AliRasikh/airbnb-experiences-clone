import airbnbLogo from "../assets/images/airbnb-logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={airbnbLogo} alt="Airbnb Logo" />
    </div>
  );
}

export default Navbar;
