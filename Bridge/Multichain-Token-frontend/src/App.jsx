import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import LandOfRealm from "./components/LandOfRealm";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bridge from "./components/Bridge";
function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={

<>
      <Navbar/>
      <Home/>
      <About/>
      <LandOfRealm/>
      <Roadmap/>
      <Tokenomics/>
      <Footer/>
</>
    } />
    <Route path="/bridge" element={<Bridge/>}/>
      </Routes>

      </Router>
  
    </div>
  );
}

export default App;
