import About from "./_sections/About";
import Events from "./_sections/Events";
import HeroSection from "./_sections/Hero";
import Newsletter from "./_sections/Newsletter";

export default function Home() {
  return(
    <div className="homePageWrapper">
      <HeroSection />
      <About />
      <Events />
      <Newsletter />
    </div>
  );
}
