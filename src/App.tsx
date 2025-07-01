import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <Contact />
    </>
  );
}
