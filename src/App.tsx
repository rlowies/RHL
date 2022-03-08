import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import BlogPage from "./pages/blogPage/BlogPage";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
