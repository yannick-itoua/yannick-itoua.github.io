import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: <img src="/javascript.jpg" alt="Javascript" width="50" /> },
  { name: "React", icon: <img src="/react.png" alt="React" width="50" /> },
  { name: "Java", icon: <img src="/java.jpg" alt="Java" width="50" /> },
  { name: "Angular", icon: <img src="/angular.png" alt="Angular" width="50" /> },
  { name: "Spring Boot", icon: <img src="/springboot.png" alt="Spring Boot" width="50" /> },
  { name: "Python", icon: <img src="/python.jpg" alt="Python" width="50" /> },
  { name: "Django", icon: <img src="/django.png" alt="Django" width="50" /> },
  { name: "Kubernetes", icon: <img src="/kuber.jpg" alt="Kubernetes" width="50" /> },
  { name: "Docker", icon: <img src="/docker.png" alt="Docker" width="50" /> },
  { name: "Tailwind", icon: <img src="/tailwind.png" alt="Tailwind" width="50" /> },
  { name: "Postgresql", icon: <img src="/postgresql.jpg" alt="Postgresql" width="50" /> },
  { name: "Mongodb", icon: <img src="/mongodb.jpg" alt="Mongodb" width="50" /> },
  { name: "Next", icon: <img src="/next.jpg" alt="Next" width="50" /> },
  { name: "Typescript", icon: <img src="/typescript.jpg" alt="Typescript" width="50" /> }
];

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: 3,
      }}
    >
      {/* Presentation Section */}
      <Typography variant="h3" gutterBottom>
        Hi, I'm Yannick Itoua
      </Typography>
      <Typography variant="h5" gutterBottom>
        Junior Fullstack Developer with 4 months of experience 
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ maxWidth: "600px", marginTop: 2 }}
      >
        I specialize in building efficient and scalable web applications using modern technologies like JavaScript, React, Angular, Java, Spring Boot, Python, Django, Kubernetes, Docker, Tailwind, PostgreSQL, MongoDB, Next, and TypeScript. Passionate about problem-solving and learning new skills, I’m excited to take on challenges that help me grow as a developer.
      </Typography>

      {/* Skills Section */}
      <Box sx={{ mt: 5, width: "100%" }}>
  <Typography variant="h4" gutterBottom>
    Skills
  </Typography>
  <Grid container spacing={4} justifyContent="center">
    {skills.map((skill, index) => (
      <Grid
        item
        xs={6}
        sm={4}
        md={3}
        key={index}
        component={motion.div}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          {skill.icon}
          <Typography variant="body1" sx={{ mt: 1 }}>
            {skill.name}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>

    </Box>
  );
};

export default HomePage;
