import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Timeline } from "../components/sections/Timeline";

export const HomePage = () => (
  <div className="space-y-32 overflow-x-hidden">
    <Hero />
    <About />
    <Timeline />
    <Contact />
  </div>
);
