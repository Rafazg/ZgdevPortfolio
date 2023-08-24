import "../portfolio/projects.css";
import project01 from "../../images/Projeto.gif";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Unstable_Grid2";

function Projects() {
  return (
    <section className="projects">
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
          <div className="item-1">
            <img className="project-image" src={project01} />
            <ButtonGroup
              className="ButtonGroup"
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
             
            >
              <Button href="https://rafazg.github.io/musicalizando/" target="_blank">View</Button>
              <Button href="https://github.com/Rafazg/musicalizando" target="_blank">Code</Button>
            </ButtonGroup>
          </div>
        </Grid>
        <Grid xs={5}>
          <div className="item-2"></div>
        </Grid>
      </Grid>
    </section>
  );
}

export default Projects;
