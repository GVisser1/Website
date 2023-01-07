import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Router>
      <div className="h-full overflow-y-auto">
        <motion.div
          className="fixed inset-x-0 top-0 z-50 h-1 origin-[0%] bg-gray-700 transition dark:bg-gray-300"
          style={{ scaleX }}
        />
        <NavBar />
        <div className="mx-auto w-full">
          <main className="relative z-20">
            <Routes>
              <Route path="" element={<HomePage />} />
              <Route path="/" element={<Navigate to="" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
