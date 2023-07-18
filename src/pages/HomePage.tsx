import { Timeline } from "../components/sections/Timeline";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";

const HomePage: React.FC = () => (
  <div className="space-y-32 pb-32">
    <Hero />
    <About />
    <Timeline />
    <Contact />
  </div>
);

export default HomePage;
