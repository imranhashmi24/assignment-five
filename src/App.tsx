import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "./components/common/Loader";
import Footer from "./components/layout/Footer";
import HeroBanner from "./components/home/HeroBanner";
import Navbar from "./components/layout/Navbar";
import TechnologiesContent from "./components/technologies/TechnologiesContent";
import type { Technology } from "./types/technology";

const technologiesPromise: Promise<Technology[]> = fetch(
  "/data/technologies.json",
).then((res) => {
  if (!res.ok) throw new Error("Failed to load technologies");
  return res.json();
});

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

      <Suspense fallback={<Loader message="Loading technologies..." />}>
        <TechnologiesContent technologiesPromise={technologiesPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
