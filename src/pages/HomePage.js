import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Button, 
  Chip,
  Card,
  CardContent,
  Container,
  Collapse,
  IconButton
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  KeyboardArrowDown as ExpandMoreIcon,
  Launch as LaunchIcon,
  Code as CodeIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
} from "@mui/icons-material";

// Theme colors for consistent branding
const theme = {
  primary: "#2563eb", // Blue
  secondary: "#7c3aed", // Purple
  accent: "#059669", // Green
  gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  cardGradient: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
};

// Current Tech Stack with enhanced data
const currentSkills = [
  { 
    name: "React", 
    icon: <img src="/react.png" alt="React library icon" width="50" loading="lazy" />,
    proficiency: "Intermediate",
    description: "Component-based UI library for building interactive user interfaces"
  },
  { 
    name: "Spring Boot", 
    icon: <img src="/springboot.png" alt="Spring Boot framework icon" width="50" loading="lazy" />,
    proficiency: "Intermediate",
    description: "Java framework for enterprise applications"
  },
  { 
    name: "TypeScript", 
    icon: <img src="/type.png" alt="TypeScript programming language icon" width="50" loading="lazy" />,
    proficiency: "Intermediate",
    description: "Strongly typed JavaScript for scalable development"
  },
  { 
    name: "Java", 
    icon: <img src="/java.jpg" alt="Java programming language icon" width="50" loading="lazy" />,
    proficiency: "Intermediate",
    description: "Object-oriented programming for backend development"
  },
  { 
    name: "PostgreSQL", 
    icon: <img src="/postgresql.jpg" alt="PostgreSQL database icon" width="50" loading="lazy" />,
    proficiency: "Intermediate",
    description: "Relational database for complex data operations"
  },
  { 
    name: "Tailwind CSS", 
    icon: <img src="/tailwind.png" alt="Tailwind CSS framework icon" width="50" loading="lazy" />,
    proficiency: "Advanced",
    description: "Utility-first CSS framework for rapid UI development"
  },
  { 
    name: "Docker", 
    icon: <img src="/docker.png" alt="Docker containerization platform icon" width="50" loading="lazy" />,
    proficiency: "Intermediate",
    description: "Containerization for consistent deployment environments"
  }
];

// Other Tools & Past Experience with enhanced data
const pastSkills = [
  { 
    name: "Next.js", 
    icon: <img src="/nextjs.png" alt="Next.js framework icon" width="50" loading="lazy" />,
    description: "React framework for production-ready applications"
  },
  { 
    name: "JavaScript", 
    icon: <img src="/js.jpg" alt="JavaScript programming language icon" width="50" loading="lazy" />,
    description: "Foundation of modern web development"
  },
  { 
    name: "Angular", 
    icon: <img src="/angular.png" alt="Angular framework icon" width="50" loading="lazy" />,
    description: "Full-featured frontend framework"
  },
  { 
    name: "Python", 
    icon: <img src="/python.jpg" alt="Python programming language icon" width="50" loading="lazy" />,
    description: "Versatile language for web and data science"
  },
  { 
    name: "Django", 
    icon: <img src="/django.png" alt="Django framework icon" width="50" loading="lazy" />,
    description: "High-level Python web framework"
  },
  { 
    name: "MongoDB", 
    icon: <img src="/mongodb.jpg" alt="MongoDB database icon" width="50" loading="lazy" />,
    description: "NoSQL database for flexible data storage"
  },
  { 
    name: "Kubernetes", 
    icon: <img src="/kuber.jpg" alt="Kubernetes orchestration platform icon" width="50" loading="lazy" />,
    description: "Container orchestration platform"
  }
];

// Featured projects data
const featuredProjects = [
  {
    title: "BookBox",
    description: "Full-stack book management platform with user authentication, book reviews, and reading progress tracking.",
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Docker"],
    highlights: ["User authentication & authorization", "RESTful API design", "Responsive UI/UX", "Database optimization"],
    image: "/Bookbox.png",
    liveDemo: "#",
    sourceCode: "#",
    featured: true
  },
  {
    title: "WeatherWear",
    description: "Weather-based outfit recommendation app that suggests clothing based on current weather conditions.",
    techStack: ["Next.js", "TypeScript", "Weather API", "Tailwind CSS"],
    highlights: ["Weather API integration", "Smart recommendation algorithm", "Responsive design", "Real-time data"],
    image: "/Weatherwear.png",
    liveDemo: "#",
    sourceCode: "#"
  },
  {
    title: "EasyAccess",
    description: "Accessibility-focused web application designed to improve digital inclusivity.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    highlights: ["WCAG compliance", "Screen reader support", "Keyboard navigation", "High contrast modes"],
    image: "/easyaccess.png",
    liveDemo: "#",
    sourceCode: "#"
  }
];

const SkillCard = ({ skill, index, isCurrentSkill = false }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Grid item xs={6} sm={4} md={3} key={index}>
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <Card
          sx={{
            height: "100%",
            background: theme.cardGradient,
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
              borderColor: theme.primary,
            }
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <CardContent sx={{ textAlign: "center", p: 3 }}>
            <Box sx={{ mb: 2 }}>
              {skill.icon}
            </Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                color: theme.primary,
                mb: 1
              }}
            >
              {skill.name}
            </Typography>
            {isCurrentSkill && skill.proficiency && (
              <Chip 
                label={skill.proficiency}
                size="small"
                sx={{ 
                  bgcolor: theme.accent,
                  color: "white",
                  fontWeight: 500,
                  mb: 1
                }}
              />
            )}
            <Collapse in={expanded}>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ mt: 1, fontSize: "0.875rem" }}
              >
                {skill.description}
              </Typography>
            </Collapse>
            <IconButton 
              size="small" 
              sx={{ 
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s"
              }}
            >
              <ExpandMoreIcon fontSize="small" />
            </IconButton>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <Card
        sx={{
          mb: 4,
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }
        }}
      >
        <Grid container>
          <Grid item xs={12} md={project.featured ? 6 : 12}>
            <Box
              sx={{
                height: { xs: 200, md: project.featured ? 300 : 200 },
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(45deg, rgba(37,99,235,0.1), rgba(124,58,237,0.1))",
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={project.featured ? 6 : 12}>
            <CardContent sx={{ p: 4, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography 
                  variant={project.featured ? "h4" : "h5"}
                  sx={{ 
                    fontWeight: 700,
                    background: theme.gradient,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mr: 2
                  }}
                >
                  {project.title}
                </Typography>
                {project.featured && (
                  <Chip 
                    label="Featured" 
                    size="small"
                    sx={{ 
                      bgcolor: theme.accent,
                      color: "white",
                      fontWeight: 600
                    }}
                  />
                )}
              </Box>
              
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ mb: 3, lineHeight: 1.6 }}
              >
                {project.description}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1,
                    color: theme.primary
                  }}
                >
                  Tech Stack:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.techStack.map((tech, idx) => (
                    <Chip 
                      key={idx}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{ 
                        borderColor: theme.primary,
                        color: theme.primary,
                        "&:hover": { bgcolor: theme.primary, color: "white" }
                      }}
                    />
                  ))}
                </Box>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1,
                    color: theme.primary
                  }}
                >
                  Key Features:
                </Typography>
                <Box component="ul" sx={{ ml: 2, color: "text.secondary" }}>
                  {project.highlights.map((highlight, idx) => (
                    <Typography 
                      key={idx}
                      component="li" 
                      variant="body2"
                      sx={{ mb: 0.5 }}
                    >
                      {highlight}
                    </Typography>
                  ))}
                </Box>
              </Box>
              
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<LaunchIcon />}
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: theme.gradient,
                    color: "white",
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(37,99,235,0.3)"
                    }
                  }}
                >
                  Live Demo
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<CodeIcon />}
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: theme.primary,
                    color: theme.primary,
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: theme.primary,
                      color: "white",
                      transform: "translateY(-2px)"
                    }
                  }}
                >
                  Source Code
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <Box sx={{ overflow: "hidden" }} id="top">
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-50%",
              width: "200%",
              height: "100%",
              background: `linear-gradient(135deg, ${theme.primary}10 0%, ${theme.secondary}10 100%)`,
              borderRadius: "50%",
              zIndex: -1
            }
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    background: theme.gradient,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                    fontSize: { xs: "2.5rem", md: "3.5rem" }
                  }}
                >
                  Full-Stack Developer
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    mb: 2,
                    fontSize: { xs: "1.5rem", md: "2rem" }
                  }}
                >
                  Building Scalable Web Solutions
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    maxWidth: "600px",
                    lineHeight: 1.6,
                    fontSize: { xs: "1rem", md: "1.25rem" }
                  }}
                >
                  Hi, I'm <strong>Yannick Itoua</strong> — a bilingual Full-Stack Developer with hands-on experience in React and Spring Boot. I create efficient, user-centered applications that solve real-world problems.
                </Typography>
                
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<EmailIcon />}
                    href="#contact"
                    sx={{
                      background: theme.gradient,
                      color: "white",
                      fontWeight: 600,
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 30px rgba(37,99,235,0.4)"
                      }
                    }}
                  >
                    Get In Touch
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<LaunchIcon />}
                    href="#projects"
                    sx={{
                      borderColor: theme.primary,
                      color: theme.primary,
                      fontWeight: 600,
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      "&:hover": {
                        bgcolor: theme.primary,
                        color: "white",
                        transform: "translateY(-3px)"
                      }
                    }}
                  >
                    View Projects
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative"
                  }}
                >
                  {/* Animated background circles */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: "absolute",
                      width: "300px",
                      height: "300px",
                      border: `2px solid ${theme.primary}30`,
                      borderRadius: "50%",
                      borderTopColor: theme.primary,
                    }}
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: "absolute",
                      width: "250px",
                      height: "250px",
                      border: `2px solid ${theme.secondary}30`,
                      borderRadius: "50%",
                      borderBottomColor: theme.secondary,
                    }}
                  />
                  
                  {/* Profile image placeholder */}
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background: theme.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "4rem",
                      fontWeight: 700,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
                    }}
                  >
                    YI
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Featured Projects Section */}
      <Container maxWidth="lg" id="projects">
        <Box sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                background: theme.gradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                textAlign: "center",
                mb: 6,
                maxWidth: "600px",
                mx: "auto"
              }}
            >
              Here are some of my recent projects showcasing full-stack development skills and problem-solving abilities.
            </Typography>
          </motion.div>

          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </Box>
      </Container>

      {/* Current Tech Stack */}
      <Box sx={{ bgcolor: "#f8fafc", py: 8 }} id="skills">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                color: theme.primary,
                mb: 2
              }}
            >
              Current Tech Stack
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                textAlign: "center",
                mb: 6,
                maxWidth: "600px",
                mx: "auto"
              }}
            >
              Technologies I'm currently using to build modern, scalable applications.
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {currentSkills.map((skill, index) => (
              <SkillCard 
                key={index} 
                skill={skill} 
                index={index} 
                isCurrentSkill={true}
              />
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Other Tools & Past Experience */}
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                color: theme.primary,
                mb: 2
              }}
            >
              Additional Skills & Experience
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                textAlign: "center",
                mb: 6,
                maxWidth: "600px",
                mx: "auto"
              }}
            >
              Other technologies and tools I've worked with throughout my development journey.
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {pastSkills.map((skill, index) => (
              <SkillCard 
                key={index} 
                skill={skill} 
                index={index} 
                isCurrentSkill={false}
              />
            ))}
          </Grid>
        </Box>
      </Container>

      {/* What I Value Section */}
      <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                background: theme.gradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 6
              }}
            >
              What I Value
            </Typography>

            <Grid container spacing={4}>
              {[
                {
                  title: "Clean Code",
                  description: "I believe in writing readable, maintainable code that follows best practices and industry standards.",
                  icon: "🎯"
                },
                {
                  title: "User Experience",
                  description: "Every application should be intuitive, accessible, and provide real value to its users.",
                  icon: "💡"
                },
                {
                  title: "Continuous Learning",
                  description: "Technology evolves rapidly, and I'm committed to staying current with new tools and methodologies.",
                  icon: "📚"
                },
                {
                  title: "Problem Solving",
                  description: "I enjoy tackling complex challenges and finding elegant solutions that make a difference.",
                  icon: "🔧"
                }
              ].map((value, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        background: theme.cardGradient,
                        borderRadius: 3,
                        border: "1px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                        }
                      }}
                    >
                      <CardContent sx={{ p: 4, textAlign: "center" }}>
                        <Typography
                          variant="h2"
                          sx={{ mb: 2, fontSize: "3rem" }}
                        >
                          {value.icon}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: theme.primary,
                            mb: 2
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ lineHeight: 1.6 }}
                        >
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Container maxWidth="lg" id="contact">
        <Box sx={{ py: 8, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                background: theme.gradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3
              }}
            >
              Let's Build Something Amazing Together
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6
              }}
            >
              I'm always excited to work on new projects and collaborate with fellow developers. Whether you have an idea, need help with development, or just want to connect, feel free to reach out!
            </Typography>
            
            <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                href="mailto:yannickitoua911@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: theme.gradient,
                  color: "white",
                  fontWeight: 600,
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 30px rgba(37,99,235,0.4)"
                  }
                }}
              >
                Email Me
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkedInIcon />}
                href="https://linkedin.com/in/yannick-itoua"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: theme.primary,
                  color: theme.primary,
                  fontWeight: 600,
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  "&:hover": {
                    bgcolor: theme.primary,
                    color: "white",
                    transform: "translateY(-3px)"
                  }
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                href="https://github.com/yannick-itoua"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: theme.secondary,
                  color: theme.secondary,
                  fontWeight: 600,
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  "&:hover": {
                    bgcolor: theme.secondary,
                    color: "white",
                    transform: "translateY(-3px)"
                  }
                }}
              >
                GitHub
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
