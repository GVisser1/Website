import { FC } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";

const App: FC = () => {
  return (
    <Router>
      <div className="mx-auto flex max-w-full dark:bg-gray-900">
        <main className="flex h-screen flex-1">
          <section className="flex flex-1 flex-col">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
};
export default App;
