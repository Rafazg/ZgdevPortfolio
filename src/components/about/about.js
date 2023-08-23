import "./about.css";
import imageProfile from '../../images/Profile.png'
import TextInfo from "../textInfo/TextInfo";


function Section () {
  return (
    <section className="About">
        <div className="profile-container">
            <img className="profile-image" src={imageProfile} />
        </div>
        
        <TextInfo />
        
    </section>
  );
};

export default Section;