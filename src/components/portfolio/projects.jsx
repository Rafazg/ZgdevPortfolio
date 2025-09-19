/* eslint-disable jsx-a11y/alt-text */
import "../portfolio/projects.css";
import project01 from "../../images/Projeto.gif";
import project02 from "../../images/Projeto02.gif";
import project03 from "../../images/Projeto03.gif";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Box from "@mui/material/Box";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Musicalizando",
      image: project01,
      description: "Uma plataforma interativa para aprendizado musical com recursos dinâmicos.",
      technologies: ["React", "CSS", "JavaScript"],
      liveUrl: "https://rafazg.github.io/musicalizando/",
      codeUrl: "https://github.com/Rafazg/musicalizando"
    },
    {
      id: 2,
      title: "Node-API",
      image: project02,
      description: "API RESTful desenvolvida com Node.js para gerenciamento de dados.",
      technologies: ["Node.js", "Express", "MongoDB"],
      codeUrl: "https://github.com/Rafazg/node-api"
    },
    {
      id: 3,
      title: "Yara: The Amazon Guardian",
      image: project03,
      description: "Jogo mobile que combina entretenimento com conscientização ambiental.",
      technologies: ["Unity", "C#", "Mobile"],
      playUrl: "https://play.google.com/store/apps/details?id=com.YaraStudios.com.unity.template.mobile2D"
    }
  ];

  return (
    <section className="projects">
      <Box className="projects-container">
        <Typography
          marginBottom={5}
          fontFamily={"monospace"}
          fontWeight={800}
          fontSize={55}
          className="projects-title"
        >
          PROJETOS
        </Typography>
        
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {projectData.map((project) => (
            <Grid xs={12} sm={6} md={4} key={project.id}>
              <Card className="project-card">
                <CardMedia
                  component="img"
                  className="project-image"
                  image={project.image}
                  title={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="project-description">
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} className="tech-stack" mt={2} flexWrap="wrap">
                    {project.technologies.map((tech, index) => (
                      <Chip key={index} label={tech} size="small" className="tech-chip" />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions className="card-actions">
                  {project.liveUrl && (
                    <Button 
                      size="small" 
                      color="primary" 
                      href={project.liveUrl} 
                      target="_blank"
                      startIcon={<VisibilityIcon />}
                      className="action-button"
                    >
                      View
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button 
                      size="small" 
                      color="primary" 
                      href={project.codeUrl} 
                      target="_blank"
                      startIcon={<GitHubIcon />}
                      className="action-button"
                    >
                      Code
                    </Button>
                  )}
                  {project.playUrl && (
                    <Button 
                      size="small" 
                      color="primary" 
                      href={project.playUrl} 
                      target="_blank"
                      startIcon={<SportsEsportsIcon />}
                      className="action-button"
                    >
                      Play
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}

export default Projects;
