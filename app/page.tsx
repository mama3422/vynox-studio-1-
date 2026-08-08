import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyVynox from "@/components/WhyVynox";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VisitorCounter from "@/components/VisitorCounter";
import PageMeta from "@/components/PageMeta";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <PageMeta />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyVynox />
      <Stats />
      <Contact />
      <Footer />
      <VisitorCounter />
    </main>
  );
}
