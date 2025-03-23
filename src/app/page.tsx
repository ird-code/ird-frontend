import About from "./_sections/About";
import Events from "./_sections/Events";
import HeroSection from "./_sections/Hero";
import JoinsUs from "./_sections/JoinsUs";
import Newsletter from "./_sections/Newsletter";
import News from "./_sections/News"
import Partners from "./_sections/Partners";

export default function Home() {
  return(
    <div className="homePageWrapper">
      <HeroSection />
      <About />
      <Events />
      <JoinsUs />
      <Partners/>
      <News/>
      <Newsletter />
    </div>
  );
}
