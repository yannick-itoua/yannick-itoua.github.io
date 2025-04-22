import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

// Current Tech Stack
const currentSkills = [
  { name: "Next.js", icon: <img src="/nextjs.png" alt="Next.js" width="50" /> },
  { name: "Spring Boot", icon: <img src="/springboot.png" alt="Spring Boot" width="50" /> },
  { name: "TypeScript", icon: <img src="/type.png" alt="TypeScript" width="50" /> },
  { name: "Java", icon: <img src="/java.jpg" alt="Java" width="50" /> },
  { name: "PostgreSQL", icon: <img src="/postgresql.jpg" alt="PostgreSQL" width="50" /> },
  { name: "Tailwind CSS", icon: <img src="/tailwind.png" alt="Tailwind" width="50" /> },
  { name: "Docker", icon: <img src="/docker.png" alt="Docker" width="50" /> }
];

// Other Tools & Past Experience
const pastSkills = [
  { name: "JavaScript", icon: <img src="/js.png" alt="JavaScript" width="50" /> },
  { name: "React", icon: <img src="/react.png" alt="React" width="50" /> },
  { name: "Angular", icon: <img src="/angular.png" alt="Angular" width="50" /> },
  { name: "Python", icon: <img src="/python.jpg" alt="Python" width="50" /> },
  { name: "Django", icon: <img src="/django.png" alt="Django" width="50" /> },
  { name: "MongoDB", icon: <img src="/mongodb.jpg" alt="MongoDB" width="50" /> },
  { name: "Kubernetes", icon: <img src="/kuber.jpg" alt="Kubernetes" width="50" /> }
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
        Entry-Level Full Stack Developer with Hands-On Internship Experience
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ maxWidth: "600px", marginTop: 2 }}
      >
        I'm a bilingual (English/French) Full Stack Developer with 4 months of practical experience, currently specializing in Next.js for the frontend and Spring Boot for the backend. I’m passionate about building scalable web applications, solving real-world problems, and continuously expanding my skills to deliver clean, efficient code. Always eager to take on new challenges and grow as a developer.
      </Typography>

      {/* Current Tech Stack */}
      <Box sx={{ mt: 5, width: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Current Tech Stack
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {currentSkills.map((skill, index) => (
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

      {/* Other Tools & Past Experience */}
      <Box sx={{ mt: 5, width: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Other Tools & Past Experience
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {pastSkills.map((skill, index) => (
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
