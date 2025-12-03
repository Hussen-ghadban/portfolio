import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-[#0B1121]">
      {/* Noise Texture Overlay */}
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none" />
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;