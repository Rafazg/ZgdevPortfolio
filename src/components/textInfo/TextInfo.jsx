import "../textInfo/textInfo.css";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import WebIcon from '@mui/icons-material/Web';
import SoftwareIcon from '@mui/icons-material/Code';
import GameIcon from '@mui/icons-material/SportsEsports';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';





const TextInfo = () => {
  return (
    <div className="textInfoContainer">
      <>
        <div className="skillOne">
          <IconButton>
            <WebIcon fontSize="large" />
          </IconButton>
          <h1>Aplicações Web</h1>
          <p>Projeto e desenvolvo plataformas web responsivas e intuitivas, oferecendo experiências online atraentes e funcionais.</p>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Single-page application" secondary="aplicação web que carrega uma única página HTML e dinamicamente atualiza o conteúdo conforme o usuário interage com a aplicação, sem recarregar a página inteira." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="static web Application" secondary="aplicação web composta por páginas HTML fixas que são entregues ao usuário exatamente como estão no servidor" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        
        <ListItemText primary="Progressive web app" secondary="utiliza as mais recentes tecnologias web para oferecer uma experiência similar a uma aplicação nativa" />
      </ListItem>
    </List>
      <Button variant="contained" color="primary" href="#learn-more-web">Saiba Mais</Button>
        </div>
        <div className="skillTwo">
          <IconButton>
            <SoftwareIcon fontSize="large" />
          </IconButton>
          <h1>Softwares Personalizados</h1>
          <p>Crio soluções tecnológicas sob medida, desde aplicativos corporativos até ferramentas de produtividade.</p>
          <Button variant="contained" color="primary" href="#learn-more-software">Saiba Mais</Button>
        </div>
        <div className="skillThree">
          <IconButton>
            <GameIcon fontSize="large" />
          </IconButton>
          <h1>Desenvolvimento de Jogos</h1>
          <p>Transformo conceitos criativos em realidade virtual, trazendo narrativas envolventes, mecânicas emocionantes e visuais cativantes.</p>
          <Button variant="contained" color="primary" href="#learn-more-games">Saiba Mais</Button>
        </div>
      </>
    </div>
  );
};

export default TextInfo;
