// Main layout components
import Hero from "./components/Hero"
import WhatIDo from "./components/WhatiDo"
import TechStack from "./components/TechStack"
import About from "./components/About"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects"
import Timeline from "./components/Timeline"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// Background and interactive components
import BeamsBackground from "./components/BeamsBackground"
import SharedLayout from "./components/SharedLayout"

function App() {
  return (
    <SharedLayout>
      {/* Animated background with beams effect */}
      <BeamsBackground intensity="medium">
        {/* Main content container with proper z-index layering */}
        <div className="relative z-10 min-h-screen text-white">
          {/* Main content sections */}
          <main>
            {/* Hero section - landing area */}
            <Hero />

            {/* What I Do section */}
            <div id="whatido">
              <WhatIDo />
            </div>

            {/* Projects showcase */}
            <div id="projects">
              <Projects />
            </div>

            {/* Technology stack display */}
            <div id="tech-stack">
              <TechStack />
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
        </div>
      </BeamsBackground>
    </SharedLayout>
  )
}

export default App
