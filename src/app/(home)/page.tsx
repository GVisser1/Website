import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Timeline } from "./sections/Timeline";

const HomePage = (): JSX.Element => (
  <main>
    <Hero />
    <About />
    <Timeline />
    <Contact />
  </main>
);

export default HomePage;
