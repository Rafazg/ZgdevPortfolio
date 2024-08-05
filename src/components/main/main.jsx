import React, { useEffect, useState } from "react";
import "./style.css";
import Midia from "../midias/midias";

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


function TypingAnimation02({text}) {
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

function TypingAnimation03({text}) {
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
    </main>
  );
};

export default Main;
