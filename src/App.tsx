import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ContactPage from "./pages/ContactPage";
import HobbiesPage from "./pages/HobbiesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";

const App: React.FC = () => {
  return (
    <Router>
      <div id="scroll" className="flex h-screen flex-col overflow-y-auto scroll-smooth">
        <NavBar />
        <div className="mx-auto w-full grow">
          <main className="relative z-20">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/hobbies" element={<HobbiesPage />} />
              <Route path="/projects/*" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={<Navigate to="/home" />} />
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
