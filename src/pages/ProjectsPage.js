import React, { useState } from "react";
import { Card, CardContent, CardActions, Typography, Grid, Button, Chip, Box, Divider, CardMedia } from "@mui/material";

const ProjectsPage = () => {
  // Static projects data - no API call needed
  const [projects] = useState([
    {
      _id: "1",
      title: "WeatherWear",
      image: "/Weatherwear.png",
      description: "WeatherWear is a full-stack application built to help users make informed clothing decisions based on real-time weather conditions. Developed with Next.js 15 and TypeScript for the frontend and Spring Boot for the backend, this containerized solution delivers personalized outfit recommendations tailored to local weather patterns. The platform features user profiles with customizable clothing preferences, historical recommendation tracking, and comprehensive weather data visualization. A microservices architecture with Docker ensures smooth deployment and scalability, while the RESTful API design facilitates seamless integration with the OpenWeather API. The responsive UI built with Tailwind CSS provides consistent experiences across devices, helping users navigate unpredictable climates from harsh winters to sudden rainstorms with appropriate attire suggestions.",
      githubLink: "https://github.com/yannick-itoua/WeatherWear",
      stack: ["Next.js", "React", "Spring Boot", "PostgreSQL", "Docker", "Tailwind CSS"]
    },
    {
      _id: "2",
      title: "BookBox",
      description: "BookBox is a full-stack digital library management system that allows users to browse, search, borrow and return books. Built with Next.js for the frontend and Spring Boot for the backend, the application features an intuitive UI with dynamic book search, user authentication, and real-time availability tracking. The platform leverages the Open Library API for extended book information and implements a robust borrowing system with status tracking. Containerized with Docker and using PostgreSQL for data persistence, BookBox showcases clean architecture principles with separate frontend/backend services and demonstrates my skills in creating responsive interfaces and RESTful API development.",
      githubLink: "https://github.com/yannick-itoua/BookBox",
      image: "/Bookbox.png",
      stack: ["Next.js", "React", "Spring Boot", "PostgreSQL", "Docker", "Tailwind CSS"]
    },
    {
      _id: "3",
      title: "EasyAccess",
      description: "EasyAccess is a full-stack web application designed to help users find, share, and manage accessible public spaces in their city. Built with Next.js (React) for the frontend and Spring Boot for the backend, the platform features interactive maps, advanced filtering, and user authentication. Dockerized deployment and a PostgreSQL database ensure easy setup and scalability. The app prevents duplicate data, supports CRUD operations, and provides a seamless user experience for discovering inclusive locations.",
      githubLink: "https://github.com/yannick-itoua/EasyAccess",
      image: "/easyaccess.png",
      stack: ["Next.js", "React", "Spring Boot", "PostgreSQL", "Docker"]
    },
    {
      _id: "4",
      title: "Movie Catalog – MERN Full-Stack App",
      description: "A dynamic movie catalog application built with the MERN stack (MongoDB, Express, React, Node.js), allowing users to browse, search, and manage movies. The backend integrates TMDB API to fetch real-time movie data, while the frontend provides a clean and interactive UI with pagination, filtering, and CRUD operations. This project showcases API integration, database management, and full-stack development skills.",
      githubLink: "https://github.com/yannick-itoua/movie-catalog",
      image: "/Movie mern.png",
      stack: ["MongoDB", "Express", "React", "Node.js"]
    }
  ]);
  // Hardcode experiences directly instead of fetching from API
  const [experiences] = useState([
    {
      _id: "1",
      title: "IT Consultant Intern",
      company: "CGI",
      employmentType: "Internship",
      period: "Apr 2024 - Jul 2024 · 4 mos",
      location: "Lille, Hauts-de-France, France · Hybrid",
      description: "During my internship at CGI, I took on meaningful responsibilities in backend development where I built and maintained REST APIs that seamlessly connected critical systems. I gained valuable experience working with enterprise tools like Intersystems Cache, while using Postman, DBeaver, and Swagger to ensure API reliability and data integrity. Beyond coding, I actively participated in an Agile team environment, contributing to architectural discussions and using data insights to drive performance improvements. I also enhanced deployment workflows using Azure CI/CD pipelines, significantly reducing release times. One of my key contributions was resolving complex support tickets that improved client satisfaction and taught me how to balance technical problem-solving with effective communication in a professional consulting environment.",
      
      skills: ["Intersystems Cache", "Postman API", "DBeaver", "Mockoon", "SQL", "ObjectScript", "Agile Methodologies", "Microsoft Azure", "Visual Studio", "REST APIs", "Filezilla", "Swagger API", "Docker"]
    }
  ]);

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
              {/* Content - Image section removed */}
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
