import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Card, CardContent, CardActions, Typography, Button, CardMedia } from "@mui/material";
//nothing
const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-tkqm.onrender.com/api/projects") // Backend URL
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  // Settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center", marginBottom: "20px" }}>
        My Projects
      </Typography>
      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project._id}>
            <Card
              sx={{
                maxWidth: 500,
                margin: "0 auto",
                ":hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              {/* Image Section */}
              <CardMedia
                component="img"
                height="200"
                image={project.image} // Path to the image
                alt={project.title}
              />
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
              </CardActions>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsPage;
