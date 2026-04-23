import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Results from "@/components/Results";
import Flow from "@/components/Flow";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Results />
        <Flow />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
