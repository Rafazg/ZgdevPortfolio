import "./style.css";
import image from "../images/Logo.png";

const Header = () => {
  return (
    <div className="container">
        <img className="logo-image" src={image} />
    </div>
  );
};

export default Header;
