import { About } from "../../components/sections/About";
import { Contact } from "../../components/sections/Contact";
import { Hero } from "../../components/sections/Hero";
import { Timeline } from "../../components/sections/Timeline";

const HomePage = (): JSX.Element => (
  <main>
    <Hero />
    <About />
    <Timeline />
    <Contact />
  </main>
);

export default HomePage;
