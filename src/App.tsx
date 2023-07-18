import { motion, useScroll, useSpring } from "framer-motion";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
    <div className="min-h-screen flex flex-col">
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-[0%] bg-blue-600"
        style={{ scaleX }}
      />
      <NavBar />
      <main className="min-h-full flex flex-col flex-1">
        <Router>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/" element={<Navigate to="" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};
export default App;
