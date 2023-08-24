import "./style.css";
import image from "../images/Logo.webp";

const Header = () => {
  return (
    <div className="container">
        <img className="logo-image" src={image} alt="logo image" />
    </div>
  );
};

export default Header;
