/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import "./style.css";
import Midia from "../midias/midias";
import pdfFile from "../../documents/claudeniro-rafaelCV.pdf";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography, Paper, Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work'; // Ícone opcional para representar trabalho
import SchoolIcon from '@mui/icons-material/School'; // Ícone opcional para representar educação



function TypingAnimation({ text }) {
  const [displayText, setDisplayText] = useState("");
  const speed = 60; // Velocidade de digitação em milissegundos

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text]);

  return <h1 className="h1">{displayText}</h1>;
}

function TypingAnimation02({ text }) {
  const [displayText, setDisplayText] = useState("");
  const speed = 60; // Velocidade de digitação em milissegundos

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text]);

  return <h1 className="h2">{displayText}</h1>;
}



function TypingAnimation03({ text }) {
  const [displayText, setDisplayText] = useState("");
  const speed = 60; // Velocidade de digitação em milissegundos

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text]);

  return <h1 className="h3">{displayText}</h1>;
}


const experiences = [
  {
    date: 'Maio de 2024',
    title: 'Desenvolvedor Autônomo',
    description: 'Trabalhando em projetos freelance e colaborativos.',
    icon: <WorkIcon />,
  },
  {
    date: 'Janeiro de 2023',
    title: 'Desenvolvedor Web',
    description: 'Atuação em desenvolvimento frontend e backend.',
    icon: <WorkIcon />,
  },
  {
    date: 'Janeiro de 2022',
    title: 'Voluntário de Educação',
    description: 'Participação em programas de ensino comunitário.',
    icon: <SchoolIcon />,
  },
  {
    date: 'Junho de 2021',
    title: 'Técnico de Suporte em TI',
    description: 'Fornecimento de suporte técnico e manutenção.',
    icon: <WorkIcon />,
  },
];

const Main = () => {
  return (
    <main className="main-container">
      <div className="title">
        <Midia />
        <TypingAnimation text="I 'AM RAFAEL" />
        <TypingAnimation02 text="FRRONT-END" />
        <TypingAnimation03 text="DEEVELOPER" />
        <h4 className="h4">TECH-LOVIG STUDENT</h4>
      </div>
      <a className="buttonLink" href={pdfFile} download="Rafael Claudeniro.pdf">
        <Button variant="contained">
          <DownloadIcon fontSize="small" /> Downwload CV
        </Button>
      </a>

      <div className="TimelineDiv">
      <Timeline position="alternate">
  <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: "auto 0" }}
      align=""
      variant="body2"
      color="text.secondary"
    >
      Maio de 2024
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot></TimelineDot>
    </TimelineSeparator>
    <TimelineContent>Desenvolvedor Autônomo</TimelineContent>
  </TimelineItem>

  <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: "auto 0" }}
      align=""
      variant="body2"
      color="text.secondary"
    >
      Janeiro de 2023
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot></TimelineDot>
    </TimelineSeparator>
    <TimelineContent>Desenvolvedor Web</TimelineContent>
  </TimelineItem>

  <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: "auto 0" }}
      align=""
      variant="body2"
      color="text.secondary"
    >
      Janeiro de 2022
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot></TimelineDot>
    </TimelineSeparator>
    <TimelineContent>Voluntário de educação</TimelineContent>
  </TimelineItem>

  <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: "auto 0" }}
      align=""
      variant="body2"
      color="text.secondary"
    >
      Junho de 2021
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot></TimelineDot>
    </TimelineSeparator>
    <TimelineContent>Técnico de suporte em TI</TimelineContent>
  </TimelineItem>
</Timeline>

      </div>
    </main>
  );
};

export default Main;
