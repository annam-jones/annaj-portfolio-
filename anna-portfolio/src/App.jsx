import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
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
          <h1>Projects Section</h1>
          <p>Content coming soon...</p>
        </section>
        
        <section id="contact" className="section">
          <h1>Contact Section</h1>
          <p>Content coming soon...</p>
        </section>
      </div>
    </div>
  );
}

export default App;