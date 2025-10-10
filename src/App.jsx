// Main layout components
import Header from "./components/Header"
import Hero from "./components/Hero"
import TechStack from "./components/TechStack"
import About from "./components/About"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects"
import Timeline from "./components/Timeline"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// Background and interactive components
import BeamsBackground from "./components/BeamsBackground"
import ScrollToTop from "./components/ScrollToTop"
// Theme management
import { ThemeProvider } from "./contexts/ThemeContext"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  return (
    // Theme provider wraps entire app for dark/light mode functionality
    <ThemeProvider>
      {/* Animated background with beams effect */}
      <BeamsBackground intensity="medium">
        {/* Main content container with proper z-index layering */}
        <div className="relative z-10 min-h-screen text-white">
          {/* Fixed navigation header */}
          <Header />

          {/* Main content sections */}
          <main>
            {/* Hero section - landing area */}
            <Hero />

            {/* Technology stack display */}
            <div id="tech-stack">
              <TechStack />
            </div>

            {/* Projects showcase */}
            <div id="projects">
              <Projects />
            </div>
            

            {/* About me section */}
            <div id="about">
              <About />
            </div>

            {/* Work experience timeline */}
            <div id="experience">
              <WorkExperience />
            </div>

           

            {/* Education/studies timeline */}
            <div id="studies">
              <Timeline />
            </div>

            {/* Contact form section */}
            <div id="contact">
              <Contact />
            </div>
          </main>

          {/* Site footer */}
          <Footer />

          {/* Floating scroll to top button */}
          <ScrollToTop />

          {/* Theme toggle button (fixed top-right) */}
          <ThemeToggle />
        </div>
      </BeamsBackground>
    </ThemeProvider>
  )
}

export default App
