import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatAssistant from "./components/ChatAssistant";
import Education from "./components/Education";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </ThemeProvider>
  );
}

export default App;
