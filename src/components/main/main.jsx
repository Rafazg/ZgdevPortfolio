/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState, useRef } from "react";
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
import { Typography, Paper, Box, Tooltip, Fade } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

// Componente de animação de digitação reutilizável
function TypingAnimation({ text, className, delay = 0 }) {
  const [displayText, setDisplayText] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);
  const speed = 60; // Velocidade de digitação em milissegundos
  const indexRef = useRef(0);
  const textRef = useRef(text);

  // Efeito para iniciar a animação após o delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, delay);

    return () => {
      clearTimeout(timer);
      indexRef.current = 0;
      setDisplayText("");
    };
  }, [delay, text]);

  // Efeito para a animação de digitação
  useEffect(() => {
    if (!startAnimation) return;
    
    textRef.current = text; // Atualiza a referência do texto
    
    const typeInterval = setInterval(() => {
      if (indexRef.current < textRef.current.length) {
        setDisplayText(prev => prev + textRef.current.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(typeInterval);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [startAnimation, speed, text]);

  return <h1 className={className}>{displayText}</h1>;
}

// Dados de experiência
const experiences = [
  {
    date: 'Maio de 2024',
    title: 'Desenvolvedor Autônomo',
    description: 'Trabalhando em projetos freelance e colaborativos.',
    icon: <WorkIcon />,
    color: '#3f51b5'
  },
  {
    date: 'Janeiro de 2023',
    title: 'Desenvolvedor Web',
    description: 'Atuação em desenvolvimento frontend e backend.',
    icon: <CodeIcon />,
    color: '#4caf50'
  },
  {
    date: 'Janeiro de 2022',
    title: 'Voluntário de Educação',
    description: 'Participação em programas de ensino comunitário.',
    icon: <SchoolIcon />,
    color: '#ff9800'
  },
  {
    date: 'Junho de 2021',
    title: 'Técnico de Suporte em TI',
    description: 'Fornecimento de suporte técnico e manutenção.',
    icon: <WorkIcon />,
    color: '#f44336'
  },
];

const Main = () => {
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <main className="main-container">
      <div className="hero-section">
        <div className="title">
          <Midia />
          <TypingAnimation text="I'M RAFAEL" className="h1" />
          <TypingAnimation text="FFULLSTACK" className="h2" delay={1000} />
          <TypingAnimation text="DDEVELOPER" className="h3" delay={2000} />
          <h4 className="h4">TECH-LOVING STUDENT</h4>
        </div>
        
        <a className="buttonLink" href={pdfFile} download="Rafael Claudeniro.pdf">
          <Button 
            variant="contained" 
            className="download-button"
            startIcon={<DownloadIcon />}
          >
            Download CV
          </Button>
        </a>
      </div>

      <div className={`timeline-section ${isVisible ? 'visible' : ''}`} ref={timelineRef}>
        <h2 className="section-title">Minha Trajetória</h2>
        <Timeline position="alternate">
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                {experience.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <Tooltip 
                  title={experience.description} 
                  arrow 
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                >
                  <TimelineDot sx={{ bgcolor: experience.color }}>
                    {experience.icon}
                  </TimelineDot>
                </Tooltip>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h3">
                    {experience.title}
                  </Typography>
                  <Typography variant="body2" className="timeline-description">
                    {experience.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </main>
  );
};

export default Main;
