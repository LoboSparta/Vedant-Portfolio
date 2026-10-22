import About from "@/components/About";
import Contact from "@/components/Contact";
import CourseSection from "@/components/CourseSection";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LongFormCollection from "@/components/LongFormCollection";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import Tools from "@/components/Tools";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <section className="shell py-16 sm:py-20" aria-label="Long-form podcast editing">
          <LongFormCollection />
        </section>
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
