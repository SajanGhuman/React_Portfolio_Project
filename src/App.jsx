import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/projects.jsx";
import Hero from "./components/hero.jsx";
import Resume from "./components/resume.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";
import Setup from "./components/setup.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/setup" element={<Setup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
