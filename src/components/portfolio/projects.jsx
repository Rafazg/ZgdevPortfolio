/* eslint-disable jsx-a11y/alt-text */
import "../portfolio/projects.css";
import project01 from "../../images/Projeto.gif";
import project02 from "../../images/Projeto02.gif";
import project03 from "../../images/Projeto03.gif";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

function Projects() {
  return (
    <section className="projects">
      <Typography
        marginBottom={5}
        fontFamily={"monospace"}
        fontWeight={800}
        fontSize={55}
      >
        PROJETOS
      </Typography>
      <Grid
        container
        spacing={1}
        columns={3}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        gap={10}
      >
        <Grid xs={5}>
          <h3>Musicalizando</h3>
          <div className="item-1">
            <img className="project-image" src={project01} />
            <ButtonGroup
              className="ButtonGroup"
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Button
                href="https://rafazg.github.io/musicalizando/"
                target="_blank"
              >
                View
              </Button>
              <Button
                href="https://github.com/Rafazg/musicalizando"
                target="_blank"
              >
                Code
              </Button>
            </ButtonGroup>
          </div>
        </Grid>
        <Grid xs={5}>
          <h3>Node-API</h3>
          <div className="item-2">
            <img className="project-image" src={project02} />
            <ButtonGroup
              className="ButtonGroup"
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Button href="https://github.com/Rafazg/node-api" target="_blank">
                Code
              </Button>
              
            </ButtonGroup>
          </div>
        </Grid>
        <Grid xs={5}>
          <h3>Yara: The Amazon Guardian</h3>
          <div className="item-2">
            <img className="project-image" src={project03} />
            <ButtonGroup
              className="ButtonGroup"
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Button href="https://play.google.com/store/apps/details?id=com.YaraStudios.com.unity.template.mobile2D" target="_blank">
                Play
              </Button>              
              
            </ButtonGroup>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Projects;
