import { FC } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NavTabBar from "./components/NavTabBar";
import NavTopBar from "./components/NavTopBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App: FC = () => {
  return (
    <Router>
      <div className="flex max-w-full mx-auto dark:bg-gray-900">
        <main className="flex-1 flex h-screen">
          <section className="flex-1 flex flex-col">
            <NavTopBar className="shrink-0 hidden md:flex" />
            <NavTabBar className="md:hidden" />
            <Routes>
              <Route path="/home" element={<HomePage />} />
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
