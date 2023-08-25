import "./about.css";
import imageProfile from '../../images/Profile.webp'
import TextInfo from "../textInfo/TextInfo";
import Tools from "../technologies/tools";


function Section () {
  return (
    <section className="About">
        <div className="profile-container">
            <img className="profile-image" src={imageProfile} alt="profile image"/>
        </div>
        <Tools />
        <TextInfo />
        
    </section>
  );
};

export default Section;