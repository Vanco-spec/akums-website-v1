import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Alumni from "./pages/Alumni";
import About from "./pages/About";
import Constitution from "./pages/Constitution";
import Leaders from "./pages/Leaders";
import MagazineAbout from "./pages/MagazineAbout";
import MagazineIssue from "./pages/MagazineIssue";
import MagazineLeader from "./pages/MagazineLeaders"; 
import MagazineSubmission from "./pages/MagazineSubmission";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/about" element={<About />} />
        <Route path="/constitution" element={<Constitution />} />
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/magazineabout" element={<MagazineAbout />} />
        <Route path="/magazineissue" element={<MagazineIssue />} />
        <Route path="/magazineleaders" element={<MagazineLeader />} />
        <Route path="/magazinesubmission" element={<MagazineSubmission />} />

      </Routes>
       
      <Footer />
    </Router>
  );
}

export default App;