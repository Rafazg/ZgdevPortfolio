/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import "../textInfo/textInfo.css";
import project03 from "../../images/Projeto03.gif";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import WebIcon from "@mui/icons-material/Web";
import SoftwareIcon from "@mui/icons-material/Code";
import GameIcon from "@mui/icons-material/SportsEsports";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Grid } from "@mui/material";


const TextInfo = () => {
  return (
    <div className="textInfoContainer">
      <>
        <div className="skillOne">
          <IconButton>
            <WebIcon fontSize="large" />
          </IconButton>
          <h1>Aplicações Web</h1>
          <p>
            Projeto e desenvolvo plataformas web responsivas e intuitivas,
            oferecendo experiências online atraentes e funcionais.
          </p>
          <Button variant="contained" color="primary" href="#learn-more-web">
            Saiba Mais
          </Button>
        </div>
        <div className="skillTwo">
          <IconButton>
            <SoftwareIcon fontSize="large" />
          </IconButton>
          <h1>Softwares Personalizados</h1>
          <p>
            Crio soluções tecnológicas sob medida, desde aplicativos
            corporativos até ferramentas de produtividade.
          </p>
          <Button
            variant="contained"
            color="primary"
            href="#learn-more-software"
          >
            Saiba Mais
          </Button>
        </div>
        <div className="skillThree">
          <IconButton>
            <GameIcon fontSize="large" />
          </IconButton>
          <h1>Desenvolvimento de Jogos</h1>
          <p>
            Transformo conceitos criativos em realidade virtual, trazendo
            narrativas envolventes, mecânicas emocionantes e visuais cativantes.
          </p>
          <Button variant="contained" color="primary" href="#learn-more-web">
            Saiba Mais
          </Button>
        </div>  
      </>
    </div>
  );
};

export default TextInfo;
