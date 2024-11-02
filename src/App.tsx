import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from './context/LanguageContextType'; // Import the provider
import Project from "./pages/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations (in milliseconds)
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  // Simulate loading delay


  return (
    <div className="wrapper"> 
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Routes>
          <Footer/>
        </LanguageProvider>

    </div>
  );
}

export default App;
