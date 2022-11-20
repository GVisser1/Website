import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <div id="scroll" className="flex h-screen flex-col overflow-y-auto scroll-smooth">
        <NavBar />
        <div className="mx-auto w-full grow">
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
