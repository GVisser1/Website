import About from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Timeline from "./sections/timeline";

const HomePage = (): JSX.Element => (
  <main>
    <Hero />
    <About />
    <Timeline />
    <Contact />
  </main>
);

export default HomePage;
