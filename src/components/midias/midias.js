import "../midias/midiasStyle.css";

const Midia = () => {
  return (
    <div className="midias">
      <a href="https://www.instagram.com/zg.software/" target="_blank">
        <ion-icon class="ig" name="logo-instagram"></ion-icon>
      </a>

      <a href="https://github.com/Rafazg" target="_blank">
        <ion-icon class="git" name="logo-github"></ion-icon>
      </a>

      <a
        href="https://www.linkedin.com/in/claudeniro-rafael-83593322a/"
        target="_blank"
      >
        <ion-icon class="link" name="logo-linkedin"></ion-icon>
      </a>
    </div>
  );
};

export default Midia;
