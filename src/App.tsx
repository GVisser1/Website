import { motion, useScroll, useSpring } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

export const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { theme } = localStorage;
  if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="min-h-screen-dvh flex flex-col">
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-[0%] bg-blue-600"
        style={{ scaleX }}
      />
      <NavBar />
      <main className="min-h-full flex flex-col flex-1">
        <Router>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};
