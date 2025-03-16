import About from "./_sections/About";
import HeroSection from "./_sections/Hero";
import News from "./_sections/News"
import Partners from "./_sections/Partners";

export default function Home() {
  return(
    <div>
      <HeroSection />
      <About />
      <News/>
      <Partners/>
    </div>
  );
}
