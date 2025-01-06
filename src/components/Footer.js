import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

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
      <Typography variant="body2" sx={{ mb: 2 }}>
        Connect with me:
      </Typography>
      <IconButton href="https://github.com/yannick-itoua" target="_blank">
        <GitHub />
      </IconButton>
      <IconButton
        href="https://linkedin.com/in/yannick-itoua"
        target="_blank"
      >
        <LinkedIn />
      </IconButton>
    </Box>
  );
};

export default Footer;
