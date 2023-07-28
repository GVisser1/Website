import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Timeline } from "../components/sections/Timeline";

const HomePage = () => (
  <div className="space-y-32 pb-32">
    <Hero />
    <About />
    <Timeline />
    <Contact />
  </div>
);

export default HomePage;
