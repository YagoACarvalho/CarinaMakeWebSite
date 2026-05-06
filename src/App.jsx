import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#fbf7f2] text-[#2b211d]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;