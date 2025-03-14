import About from "./_sections/About";
import HeroSection from "./_sections/Hero";
import News from "./_sections/News"

export default function Home() {
  return(
    <div>
      <HeroSection />
      <About />
      <News/>
    </div>
  );
}
