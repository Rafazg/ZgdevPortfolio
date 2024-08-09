/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  IconButton,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Modal,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Web as WebIcon,
  Code as SoftwareIcon,
  SportsEsports as GameIcon,
  Image as ImageIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import clsx from "clsx";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react"; // Importação de css
import "../textInfo/textInfo.css";
import project03 from "../../images/Projeto03.gif";


const TextInfo = () => {
  const [openWeb, setOpenWeb] = React.useState(false);
  const [openSoftware, setOpenSoftware] = React.useState(false);
  const [openGame, setOpenGame] = React.useState(false);

  const handleOpenWeb = () => setOpenWeb(true);
  const handleCloseWeb = () => setOpenWeb(false);

  const handleOpenSoftware = () => setOpenSoftware(true);
  const handleCloseSoftware = () => setOpenSoftware(false);

  const handleOpenGame = () => setOpenGame(true);
  const handleCloseGame = () => setOpenGame(false);

  const CustomAccordion = styled(Accordion)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&.Mui-expanded": {
      margin: "auto",
    },
  }));

  const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderBottom: `5px solid ${theme.palette.divider}`,
    "& .MuiAccordionSummary-expandIcon": {
      color: theme.palette.text.primary,
    },
  }));

  const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  }));

  const CustomAccordionActions = styled(AccordionActions)(({ theme }) => ({
    padding: theme.spacing(1),
    justifyContent: "flex-end",
  }));

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
          <TriggerButton type="button" onClick={handleOpenWeb}>
            Saiba Mais
          </TriggerButton>
          <StyleModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={openWeb}
            onClose={handleCloseWeb}
            slots={{ backdrop: StyledBackdrop }}
          >
            <ModalContent1 sx={{ width: 400 }}>
              <h2 id="unstyled-modal-title" className="modal-title">
                Especializado em Aplicações
              </h2>

              <CustomAccordion>
                <CustomAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Single Page Application
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  É uma aplicação web ou site que consiste de uma única página
                  web com o objetivo de fornecer uma experiência do usuário
                  similar à de um aplicativo desktop.
                </CustomAccordionDetails>
              </CustomAccordion>

              <CustomAccordion>
                <CustomAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Static Web Application
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  Aplicativo Web que pode ser entregue diretamente ao navegador
                  de um usuário final sem qualquer alteração do lado do servidor
                  do HTML, CSS ou Conteúdo JavaScript. Embora isso possa
                  abranger sites muito planos e imutáveis, como um site
                  corporativo, aplicativos da web estáticos geralmente se
                  referem a sites ricos que utilizam tecnologias no navegador em
                  vez de no servidor para entregar conteúdo dinâmico.
                </CustomAccordionDetails>
              </CustomAccordion>

              <CustomAccordion defaultExpanded>
                <CustomAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Dynamic Web Application
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  Aplicativo da Web dinâmico é projetado para responder à
                  entrada do usuário e fornecer conteúdo em tempo real. Ao
                  contrário dos aplicativos da web estáticos, que apresentam o
                  mesmo conteúdo para todos os usuários, os aplicativos da web
                  dinâmicos se adaptam com base nas interações e preferências do
                  usuário.
                </CustomAccordionDetails>
                <CustomAccordionActions>
                  <Button onClick={() => console.log("Fechar")}>Fechar</Button>
                </CustomAccordionActions>
              </CustomAccordion>

              <p
                id="unstyled-modal-description"
                className="modal-description"
              ></p>
            </ModalContent1>
          </StyleModal>
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
          <TriggerButton type="button" onClick={handleOpenSoftware}>
            Saiba Mais
          </TriggerButton>
          <StyleModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={openSoftware}
            onClose={handleCloseSoftware}
            slots={{ backdrop: StyledBackdrop }}
          >
            <ModalContent2 sx={{ width: 400 }}>
              <h2 id="unstyled-modal-title" className="modal-title">
                Tipos de Softwares
              </h2>
              <p
                id="unstyled-modal-description"
                className="modal-description"
              ></p>
              <CustomAccordion>
                <CustomAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Software de aplicativo
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  programas stand-alone (que rodam ser internet ou outros
                  recursos em rede) que resolve um problema de negócio
                  específico.
                </CustomAccordionDetails>
              </CustomAccordion>

              <CustomAccordion>
                <CustomAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Software embutido
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  programas contidos dentro de um produto ou sistema e usados
                  para controlar o equipamento e fornecer funcionalidades ao
                  usuário final.
                </CustomAccordionDetails>
              </CustomAccordion>
            </ModalContent2>
          </StyleModal>
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
          <TriggerButton type="button" onClick={handleOpenGame}>
            Saiba Mais
          </TriggerButton>
          <StyleModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={openGame}
            onClose={handleCloseGame}
            slots={{ backdrop: StyledBackdrop }}
          >
            <ModalContent3 sx={{ width: 400 }}>
              <h2 id="unstyled-modal-title" className="modal-title">
                Engine utilizada
              </h2>
              <CustomAccordion>
                <CustomAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Unity
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  O Unity oferece aos usuários a capacidade de criar jogos e
                  experiências em 2D e 3D, e o mecanismo oferece uma API de
                  script primária em C# usando Mono, tanto para o editor do
                  Unity na forma de plug-ins quanto para os próprios jogos
                </CustomAccordionDetails>
              </CustomAccordion>
            </ModalContent3>
          </StyleModal>
        </div>
      </>
    </div>
  );
};

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyleModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent1 = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const ModalContent2 = styled(ModalContent1)``;
const ModalContent3 = styled(ModalContent1)``;

const TriggerButton = styled("button")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px
        ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
      outline: none;
    }
  `
);

export default TextInfo;
