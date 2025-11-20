import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">

        <HeroSection />

        <section id="fonctionnalites">
          <ServicesSection />
        </section>

        <section id="temoignages">
          <TestimonialsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

      </main>

      <Footer />
     <ScrollToTopButton/>
    </div>
  );
};

export default Home;
