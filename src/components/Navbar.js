import React, { useState, useEffect } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import { 
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Person as PersonIcon,
  Email as EmailIcon
} from "@mui/icons-material";
import { motion } from "framer-motion";

const theme = {
  primary: "#2563eb",
  gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon />, action: () => scrollToSection('top') },
    { name: 'Projects', path: '/', icon: <WorkIcon />, action: () => scrollToSection('projects') },
    { name: 'Skills', path: '/', icon: <PersonIcon />, action: () => scrollToSection('skills') },
    { name: 'Contact', path: '/', icon: <EmailIcon />, action: () => scrollToSection('contact') },
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item, index) => (
          <ListItem 
            button 
            key={item.name}
            onClick={item.action}
            sx={{
              '&:hover': {
                backgroundColor: theme.primary + '20',
              }
            }}
          >
            <Box sx={{ mr: 2, color: theme.primary }}>
              {item.icon}
            </Box>
            <ListItemText 
              primary={item.name}
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: 500,
                  color: theme.primary
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled 
            ? '0 4px 20px rgba(0,0,0,0.1)' 
            : 'none',
          transition: 'all 0.3s ease',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700,
                background: theme.gradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: 'pointer'
              }}
              onClick={() => scrollToSection('top')}
            >
              Yannick Itoua
            </Typography>
          </motion.div>

          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Button
                    onClick={item.action}
                    startIcon={item.icon}
                    sx={{
                      color: isScrolled ? theme.primary : 'white',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        backgroundColor: isScrolled 
                          ? theme.primary + '10' 
                          : 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '2px',
                        background: theme.gradient,
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::before': {
                        width: '100%',
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Box>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: isScrolled ? theme.primary : 'white',
                '&:hover': {
                  backgroundColor: isScrolled 
                    ? theme.primary + '10' 
                    : 'rgba(255,255,255,0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
