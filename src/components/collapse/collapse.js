import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "../collapse/Acordion.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
    width: 20,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",

  flexDirection: "row-reverse",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),

  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  width: "300px",
}));

export default function Collapse() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    
    if (newExpanded) {
        const text1 = document.querySelector('.p1');
        const text2 = document.querySelector('.p2')
        text1.style.animation = "text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both";
        text2.style.animation = "text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both";
      } else {
        const text1 = document.querySelector('.p1');
        const text2 = document.querySelector('.p2');
        text1.style.animation = "none";
        text2.style.animation = "none";

      }

    
  };

  return (
    <div className="Acordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Know me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="p1">
            Hello! I'm a front-end developer passionate about creating
            interactive and engaging experiences on the web.
            </p>
            <p className="p2">
            I've been working as a web developer for two years, always looking for technical excellence and
            creativity. I design and develop responsive web platforms and
            intuitive, creating tailor-made technological solutions, from
            business applications to productivity tools.
            </p>
             
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
