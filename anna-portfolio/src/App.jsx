import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="content">
        <section id="home">
          <Home />
        </section>
        
        <section id="about" className="section">
          <h1>About Section</h1>
          <p>Content coming soon...</p>
        </section>
        
        <section id="projects" className="section">
         <Projects />
        </section>
        
        <section id="contact" className="section">
         <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;