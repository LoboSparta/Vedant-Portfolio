import About from "@/components/About";
import Contact from "@/components/Contact";
import CourseSection from "@/components/CourseSection";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import LongFormCollection from "@/components/LongFormCollection";
import Tools from "@/components/Tools";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <LongFormCollection />
        <Experience />
        <CourseSection />
        <About />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
