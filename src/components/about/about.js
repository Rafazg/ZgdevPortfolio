import "./about.css";
import imageProfile from '../../images/Profile.webp'
import TextInfo from "../textInfo/TextInfo";


function Section () {
  return (
    <section className="About">
        <div className="profile-container">
            <img className="profile-image" src={imageProfile} alt="profile image"/>
        </div>
        
        <TextInfo />
        
    </section>
  );
};

export default Section;