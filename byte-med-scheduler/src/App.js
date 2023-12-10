import './App.css';
import HomeSection from './Components/HomeSection/HomeSection';
import Navbar from './Components/Navbar/Navbar';
import Doctorsec from './Components/DoctorSec/Doctorsec';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <Navbar/>
    <Router>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/clinic/:doctype" element={<Doctorsec/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
