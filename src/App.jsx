import React from "react";
import "./App.css";

import Navbar from "./Components/Home/Navbar";
import Header from "./Components/Home/Header";
import About from "./Components/About/About";
import MySkills from "./Components/Skills/MySkills";
import MyProjects from "./Components/Projects/MyProject";
import ContactMe from "./Components/Contact/ContactMe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About />
      <MySkills></MySkills>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
