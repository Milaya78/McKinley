import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";
import AreasOfPractice from "./components/AreasOfPractice/AreasOfPractice";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RecentArticles from "./components/RecentArticles/RecentArticles";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AreasOfPractice />
              <AdditionalInfo />
              <RecentArticles />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
