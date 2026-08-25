import About from "./components/About";
import BackgroundGrid from "./components/BackgroundGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FadeIn from "./components/FadeIn";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-slate-200 selection:bg-accent/30 selection:text-white overflow-hidden">
      <BackgroundGrid />

      <Navbar />
      
      <FadeIn delay={0.2} direction="none">
        <Hero />
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <About />
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <Skills />
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <Projects />
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <Contact />
      </FadeIn>
      
      <FadeIn delay={0.2} direction="none">
        <Footer />
      </FadeIn>
    </div>
  );
}
