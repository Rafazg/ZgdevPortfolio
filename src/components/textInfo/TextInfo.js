import "../textInfo/textInfo.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../textInfo/textInfo.css'






const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const TextInfo = () => {
  return (
    <div className="textInfoContainer">
        <Card>
      <CardContent>
        <Typography variant="h5">
        🌐 Aplicações Web:
        </Typography>
        <Typography fontSize={17}>
        Projeto e desenvolvo plataformas web responsivas e intuitivas, oferecendo experiências online atraentes e funcionais.
        </Typography>
        <Typography variant="h5">
        🖥️ Softwares Personalizados:
        </Typography>
        <Typography fontSize={17}>
         Crio soluções tecnológicas sob medida, desde aplicativos corporativos até ferramentas de produtividade.
        </Typography>
        <Typography variant="h5">
        🕹️ Desenvolvimento de Jogos:
        </Typography>
        <Typography>
        Transformo conceitos criativos em realidade virtual, trazendo narrativas envolventes, mecânicas emocionantes e visuais cativantes 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default TextInfo;
