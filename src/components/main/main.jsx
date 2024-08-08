/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import "./style.css";
import Midia from "../midias/midias";
import pdfFile from '../../documents/claudeniro-rafaelCV.pdf';


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
      <a className="buttonLink" href={pdfFile} download='Rafael Claudeniro.pdf'>
        <Button variant="contained">
        <DownloadIcon fontSize="small" /> Downwload CV 
        </Button>
      </a>
    </main>
  );
};

export default Main;
