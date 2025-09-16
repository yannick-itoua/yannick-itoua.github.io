import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 5,
        py: 3,
        borderTop: "1px solid #ccc",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "medium" }}>
        Connect with me
      </Typography>
      
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <IconButton 
          href="mailto:yannickitoua911@gmail.com" 
          target="_blank"
          sx={{ color: "primary.main" }}
        >
          <Email />
        </IconButton>
        <IconButton 
          href="https://github.com/yannick-itoua" 
          target="_blank"
          sx={{ color: "primary.main" }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/yannick-itoua"
          target="_blank"
          sx={{ color: "primary.main" }}
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
