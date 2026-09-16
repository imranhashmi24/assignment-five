import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/layout/Footer";
import HeroBanner from "./components/home/HeroBanner";
import Navbar from "./components/layout/Navbar";
import TechnologiesContent from "./components/technologies/TechnologiesContent";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} theme="light" />

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navLinks={navLinks}
      />

      <HeroBanner />

      <TechnologiesContent />

      <Footer />
    </>
  );
}

export default App;
