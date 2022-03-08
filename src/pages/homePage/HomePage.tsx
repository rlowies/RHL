import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home-page-container">
        <NavBar />
      </div>
    </>
  );
};

export default HomePage;
