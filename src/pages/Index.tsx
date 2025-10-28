import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Areas />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
