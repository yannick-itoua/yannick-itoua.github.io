import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);

      setStatus({ success: true, message: response.data.message });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ success: false, message: error.response?.data?.error || "Something went wrong" });
    }
  };

  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      {status.message && (
        <Alert severity={status.success ? "success" : "error"} sx={{ mb: 2 }}>
          {status.message}
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, maxWidth: "500px", mx: "auto" }}>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          margin="normal"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Your Email"
          name="email"
          margin="normal"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Your Message"
          name="message"
          margin="normal"
          multiline
          rows={4}
          variant="outlined"
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
