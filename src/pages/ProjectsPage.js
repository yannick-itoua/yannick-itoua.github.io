import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardActions, Typography, Grid, Button, CardMedia, Chip, Box, Divider } from "@mui/material";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Fetch projects
    axios
      .get("https://portfolio-backend-tkqm.onrender.com/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
    
    // Fetch experiences
    axios
      .get("https://portfolio-backend-tkqm.onrender.com/api/experiences")
      .then((response) => setExperiences(response.data))
      .catch((error) => console.error("Error fetching experiences:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* Experience Section */}
      <Typography variant="h4" gutterBottom style={{ textAlign: "center", marginBottom: "20px" }}>
        Professional Experience
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {experiences.map((experience) => (
          <Grid item xs={12} key={experience._id}>
            <Card
              sx={{
                ":hover": {
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                {/* Company Image */}
                <CardMedia
                  component="img"
                  sx={{ 
                    width: { xs: "100%", md: 200 }, 
                    height: { xs: 200, md: "auto" },
                    objectFit: "cover" 
                  }}
                  image={experience.image}
                  alt={experience.company}
                />
                
                {/* Content */}
                <Box sx={{ flex: 1 }}>
                  <CardContent>
                    <Typography variant="h5">{experience.title}</Typography>
                    <Typography variant="h6" color="text.secondary">
                      {experience.company} · {experience.employmentType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {experience.period}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {experience.location}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {experience.description}
                    </Typography>
                    
                    {/* Skills */}
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'medium' }}>
                      Skills
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {experience.skills.map((skill, index) => (
                        <Chip key={index} label={skill} size="small" color="primary" variant="outlined" />
                      ))}
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Divider sx={{ my: 5 }} />
      
      {/* Projects Section */}
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
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              {/* Titre et description */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {project.description}
                </Typography>
                
                {/* Tech stack */}
                {project.stack && (
                  <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {project.stack.map((tech, index) => (
                      <Chip key={index} label={tech} size="small" variant="outlined" />
                    ))}
                  </Box>
                )}
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
