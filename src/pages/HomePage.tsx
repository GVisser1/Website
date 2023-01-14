import { Timeline } from "../components/Timeline";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";

const HomePage: React.FC = () => (
  <div className="space-y-32 pb-32">
    <Hero />
    <About />
    <Timeline />
    <Skills />
    <Contact />

    {/* <section
                  id="movies"
                  className="mx-auto flex max-w-screen-lg items-center justify-center gap-x-8 pb-20"
                >
                  <div className="group relative aspect-[7/10] flex-none overflow-hidden rounded-xl shadow-lg">
                    <img
                      className="h-full w-full transition duration-300 group-hover:scale-105"
                      src="/images/c-mon-c-mon.jpeg"
                      alt="C'mon C'mon"
                    />
                    <div className="absolute inset-0 h-full w-full bg-gray-900/75 opacity-0 transition duration-300 group-hover:opacity-100 ">
                      <Text
                        size="xl"
                        weight="semibold"
                        className="flex h-full items-center justify-center"
                        color="all-white"
                      >
                        C'mon C'mon
                      </Text>
                    </div>
                  </div>
                </section> */}
  </div>
);

export default HomePage;
