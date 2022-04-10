import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import About from "./pages/About";
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
          <Route path={ROUTE_PATHS.projects} element={<Projects />} />
          <Route path={ROUTE_PATHS.blog} element={<Blog />} />
          <Route path={ROUTE_PATHS.about} element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
