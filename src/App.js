import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./components/Contact";
 // Import the Contact page
import { CssBaseline, Container } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default App;
