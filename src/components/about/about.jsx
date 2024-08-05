import "./about.css";
import imageProfile from '../../images/Profile.webp'
import TextInfo from "../textInfo/TextInfo";
import Tools from "../technologies/tools";


export default function Section () {
  return (
    <section className="About">
        <div className="profile-container">
            <img className="profile-image" src={imageProfile} alt="profile"/>
        </div>
        <Tools />
        <TextInfo />
        
    </section>
  );
};

