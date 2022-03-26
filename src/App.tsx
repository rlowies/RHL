import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import BlogPage from "./pages/blogPage/BlogPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import { ROUTE_PATHS } from "./constants/routes";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to={ROUTE_PATHS.home} />} />
          <Route path={ROUTE_PATHS.home} element={<Home />} />
          <Route path={ROUTE_PATHS.projects} element={<ProjectsPage />} />
          <Route path={ROUTE_PATHS.blog} element={<BlogPage />} />
          <Route path={ROUTE_PATHS.about} element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
