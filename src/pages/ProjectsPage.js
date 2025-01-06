import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardActions, Typography, Grid, Button } from "@mui/material";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <Grid container spacing={4} sx={{ mt: 3 }}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project._id}>
          <Card
            sx={{
              ":hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href={project.githubLink} target="_blank">
                GitHub
              </Button>
              {project.liveLink && (
                <Button size="small" color="secondary" href={project.liveLink} target="_blank">
                  Live Demo
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsPage;
