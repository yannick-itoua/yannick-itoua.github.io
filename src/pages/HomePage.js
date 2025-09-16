import React, { useState, useEffect } from "react";
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
const getTheme = (isDark) => ({
  primary: "#2563eb", // Blue
  secondary: "#7c3aed", // Purple
  accent: "#059669", // Green
  gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  cardGradient: isDark 
    ? "linear-gradient(145deg, #1e293b 0%, #0f172a 100%)"
    : "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
  darkGradient: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
  background: isDark ? "#0f172a" : "#ffffff",
  surface: isDark ? "#1e293b" : "#f8fafc",
  text: {
    primary: isDark ? "#f1f5f9" : "#1e293b",
    secondary: isDark ? "#94a3b8" : "#64748b"
  },
  border: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
});

// Scroll Progress Component
const ScrollProgress = ({ theme }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'rgba(255,255,255,0.1)',
        zIndex: 9999,
        backdropFilter: 'blur(10px)'
      }}
    >
      <Box
        sx={{
          height: '100%',
          background: theme.gradient,
          width: `${scrollProgress}%`,
          transition: 'width 0.1s ease',
          boxShadow: '0 0 10px rgba(37,99,235,0.5)'
        }}
      />
    </Box>
  );
};

// Enhanced animations object
const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
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
    sourceCode: "https://github.com/yannick-itoua/BookBox",
    featured: true
  },
  {
    title: "WeatherWear",
    description: "Weather-based outfit recommendation app that suggests clothing based on current weather conditions.",
    techStack: ["Next.js", "TypeScript", "Weather API", "Tailwind CSS"],
    highlights: ["Weather API integration", "Smart recommendation algorithm", "Responsive design", "Real-time data"],
    image: "/Weatherwear.png",
    liveDemo: "#",
    sourceCode: "https://github.com/yannick-itoua/WeatherWear"
  },
  {
    title: "EasyAccess",
    description: "Accessibility-focused web application designed to improve digital inclusivity.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    highlights: ["WCAG compliance", "Screen reader support", "Keyboard navigation", "High contrast modes"],
    image: "/easyaccess.png",
    liveDemo: "#",
    sourceCode: "https://github.com/yannick-itoua/EasyAccess"
  }
];

const SkillCard = ({ skill, index, isCurrentSkill = false, theme }) => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Grid item xs={6} sm={4} md={3} key={index}>
      <motion.div
        {...animations.fadeInUp}
        transition={{ ...animations.fadeInUp.transition, delay: index * 0.1 }}
        whileHover={{ 
          scale: 1.05, 
          y: -10,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          perspective: "1000px"
        }}
      >
        <Card
          sx={{
            height: "100%",
            background: isHovered 
              ? `linear-gradient(145deg, ${theme.primary}15, ${theme.secondary}15)`
              : theme.cardGradient,
            borderRadius: 3,
            border: isHovered 
              ? `2px solid ${theme.primary}` 
              : "1px solid rgba(255,255,255,0.2)",
            boxShadow: isHovered
              ? `0 20px 60px ${theme.primary}20`
              : "0 8px 32px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
            "&:hover": {
              "& .skill-icon": {
                transform: "scale(1.1) rotateY(180deg)",
              },
              "& .proficiency-chip": {
                transform: "scale(1.05)",
                boxShadow: `0 4px 15px ${theme.accent}40`
              }
            }
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <CardContent sx={{ textAlign: "center", p: 3 }}>
            <Box 
              className="skill-icon"
              sx={{ 
                mb: 2,
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                transformStyle: "preserve-3d"
              }}
            >
              {skill.icon}
            </Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                color: isHovered ? theme.primary : theme.primary,
                mb: 1,
                transition: "color 0.3s ease"
              }}
            >
              {skill.name}
            </Typography>
            {isCurrentSkill && skill.proficiency && (
              <Chip 
                className="proficiency-chip"
                label={skill.proficiency}
                size="small"
                sx={{ 
                  bgcolor: theme.accent,
                  color: "white",
                  fontWeight: 500,
                  mb: 1,
                  transition: "all 0.3s ease"
                }}
              />
            )}
            <Collapse in={expanded}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ mt: 1, fontSize: "0.875rem" }}
                >
                  {skill.description}
                </Typography>
              </motion.div>
            </Collapse>
            <IconButton 
              size="small" 
              sx={{ 
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                color: isHovered ? theme.primary : "inherit"
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

const ProjectCard = ({ project, index, theme }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      {...animations.fadeInUp}
      transition={{ ...animations.fadeInUp.transition, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        sx={{
          mb: 4,
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: isHovered 
            ? "0 25px 80px rgba(0,0,0,0.2)" 
            : "0 12px 40px rgba(0,0,0,0.1)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0px) scale(1)",
          border: isHovered ? `2px solid ${theme.primary}20` : "2px solid transparent",
          background: isHovered 
            ? `linear-gradient(145deg, ${theme.primary}05, ${theme.secondary}05)`
            : theme.cardGradient
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
                transition: "transform 0.4s ease",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: isHovered
                    ? "linear-gradient(45deg, rgba(37,99,235,0.2), rgba(124,58,237,0.2))"
                    : "linear-gradient(45deg, rgba(37,99,235,0.1), rgba(124,58,237,0.1))",
                  transition: "background 0.4s ease"
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
                    background: isHovered ? theme.gradient : theme.gradient,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mr: 2,
                    transition: "all 0.3s ease"
                  }}
                >
                  {project.title}
                </Typography>
                {project.featured && (
                  <motion.div
                    animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Chip 
                      label="Featured" 
                      size="small"
                      sx={{ 
                        bgcolor: theme.accent,
                        color: "white",
                        fontWeight: 600,
                        boxShadow: isHovered ? `0 4px 15px ${theme.accent}40` : "none"
                      }}
                    />
                  </motion.div>
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
                <motion.div
                  variants={animations.staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.techStack.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        variants={animations.scaleIn}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Chip 
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ 
                            borderColor: theme.primary,
                            color: theme.primary,
                            transition: "all 0.3s ease",
                            "&:hover": { 
                              bgcolor: theme.primary, 
                              color: "white",
                              transform: "translateY(-2px)",
                              boxShadow: `0 4px 10px ${theme.primary}40`
                            }
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Box>
              
              {/* ...existing highlights code... */}
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                </motion.div>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </motion.div>
  );
};

const HomePage = ({ isDarkMode }) => {
  const theme = getTheme(isDarkMode);

  // Floating particles component
  const FloatingParticles = () => (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0
      }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            borderRadius: "50%",
            background: `linear-gradient(45deg, ${theme.primary}40, ${theme.secondary}40)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </Box>
  );

  return (
    <Box 
      sx={{ 
        overflow: "hidden",
        backgroundColor: theme.background,
        color: theme.text.primary,
        minHeight: "100vh",
        transition: "all 0.3s ease"
      }} 
      id="top"
    >
      <ScrollProgress theme={theme} />
      
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
          <FloatingParticles />
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div
                {...animations.fadeInLeft}
                transition={{ ...animations.fadeInLeft.transition, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
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
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      letterSpacing: "-0.02em"
                    }}
                  >
                    Full-Stack Developer
                  </Typography>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      color: theme.text.primary,
                      mb: 2,
                      fontSize: { xs: "1.5rem", md: "2rem" }
                    }}
                  >
                    Building Scalable Web Solutions
                  </Typography>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 4,
                      maxWidth: "600px",
                      lineHeight: 1.6,
                      fontSize: { xs: "1rem", md: "1.25rem" },
                      color: theme.text.secondary
                    }}
                  >
                    Hi, I'm <strong>Yannick Itoua</strong> — a bilingual Full-Stack Developer with hands-on experience in React and Spring Boot. I create efficient, user-centered applications that solve real-world problems.
                  </Typography>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                          boxShadow: "0 8px 25px rgba(37,99,235,0.3)",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 12px 30px rgba(37,99,235,0.4)"
                          }
                        }}
                      >
                        Get In Touch
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                            transform: "translateY(-3px)",
                            boxShadow: "0 8px 25px rgba(37,99,235,0.3)"
                          }
                        }}
                      >
                        View Projects
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <motion.div
                {...animations.fadeInRight}
                transition={{ ...animations.fadeInRight.transition, delay: 0.4 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative"
                  }}
                >
                  {/* Enhanced Animated background circles */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: "absolute",
                      width: "300px",
                      height: "300px",
                      border: `3px solid transparent`,
                      borderRadius: "50%",
                      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary}) border-box`,
                      WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "subtract",
                    }}
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: "absolute",
                      width: "250px",
                      height: "250px",
                      border: `2px solid ${theme.accent}50`,
                      borderRadius: "50%",
                      borderBottomColor: theme.accent,
                    }}
                  />
                  
                  {/* Floating particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-10, 10, -10],
                        x: [-5, 5, -5],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        position: "absolute",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: theme.gradient,
                        top: `${20 + i * 60}px`,
                        left: `${30 + i * 40}px`,
                        zIndex: -1
                      }}
                    />
                  ))}
                  
                  {/* Enhanced Profile image placeholder */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      perspective: "1000px"
                    }}
                  >
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
                        boxShadow: `
                          0 20px 60px rgba(0,0,0,0.2),
                          0 0 0 4px rgba(255,255,255,0.1),
                          0 0 0 8px ${theme.primary}20
                        `,
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: -4,
                          left: -4,
                          right: -4,
                          bottom: -4,
                          background: theme.gradient,
                          borderRadius: "50%",
                          zIndex: -1,
                          opacity: 0.3
                        }
                      }}
                    >
                      YI
                    </Box>
                  </motion.div>
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
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
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
                  mb: 2,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60px",
                    height: "4px",
                    background: theme.gradient,
                    borderRadius: "2px"
                  }
                }}
              >
                Featured Projects
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
          </motion.div>

          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} theme={theme} />
          ))}
        </Box>
      </Container>

      {/* Current Tech Stack */}
      <Box 
        sx={{ 
          bgcolor: theme.surface, 
          py: 8,
          transition: "background-color 0.3s ease"
        }} 
        id="skills"
      >
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

          <motion.div
            variants={animations.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Grid container spacing={3}>
              {currentSkills.map((skill, index) => (
                <SkillCard 
                  key={index} 
                  skill={skill} 
                  index={index} 
                  isCurrentSkill={true}
                  theme={theme}
                />
              ))}
            </Grid>
          </motion.div>
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
                theme={theme}
              />
            ))}
          </Grid>
        </Box>
      </Container>

      {/* What I Value Section */}
      <Box 
        sx={{ 
          bgcolor: theme.surface, 
          py: 8,
          transition: "background-color 0.3s ease"
        }}
      >
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

            <motion.div
              variants={animations.staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
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
                      variants={animations.item}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      style={{ height: "100%" }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          background: theme.cardGradient,
                          borderRadius: 3,
                          border: "1px solid rgba(255,255,255,0.2)",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                          transition: "all 0.3s ease",
                          position: "relative",
                          overflow: "hidden",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 20px 60px rgba(37,99,235,0.2)",
                            border: "1px solid rgba(37,99,235,0.3)",
                            "& .value-icon": {
                              transform: "scale(1.2) rotate(10deg)"
                            },
                            "& .value-title": {
                              color: theme.primary
                            }
                          },
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: "-100%",
                            width: "100%",
                            height: "2px",
                            background: theme.gradient,
                            transition: "left 0.5s ease"
                          },
                          "&:hover::before": {
                            left: "100%"
                          }
                        }}
                      >
                        <CardContent sx={{ p: 4, textAlign: "center" }}>
                          <Typography
                            variant="h2"
                            className="value-icon"
                            sx={{ 
                              mb: 2, 
                              fontSize: "3rem",
                              transition: "transform 0.3s ease",
                              display: "inline-block"
                            }}
                          >
                            {value.icon}
                          </Typography>
                          <Typography
                            variant="h5"
                            className="value-title"
                            sx={{
                              fontWeight: 600,
                              color: theme.primary,
                              mb: 2,
                              transition: "color 0.3s ease"
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
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
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
                    boxShadow: "0 8px 25px rgba(37,99,235,0.3)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      boxShadow: "0 12px 35px rgba(37,99,235,0.4)"
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      transition: "left 0.5s"
                    },
                    "&:hover::before": {
                      left: "100%"
                    }
                  }}
                >
                  Email Me
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
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
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      bgcolor: theme.primary,
                      color: "white",
                      boxShadow: "0 8px 25px rgba(37,99,235,0.3)"
                    }
                  }}
                >
                  LinkedIn
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
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
                      boxShadow: "0 8px 25px rgba(124,58,237,0.3)"
                    }
                  }}
                >
                  GitHub
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
