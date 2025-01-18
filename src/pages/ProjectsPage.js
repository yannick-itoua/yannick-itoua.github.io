import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardActions, Typography, Grid, Button, CardMedia } from "@mui/material";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-tkqm.onrender.com/api/projects") // URL du backend
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center", marginBottom: "20px" }}>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project._id}>
            <Card
              sx={{
                ":hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                height="200"
                image={project.image} // Chemin défini dans le backend
                alt={project.title}
              />
              {/* Titre et description */}
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {project.description}
                </Typography>
              </CardContent>
              {/* Bouton GitHub */}
              <CardActions>
                <Button size="small" color="primary" href={project.githubLink} target="_blank">
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectsPage;
