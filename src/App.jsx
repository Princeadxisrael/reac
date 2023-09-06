import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import Profilepage from "./pages/Profilepage";
import Homepage from "./pages/Homepage";
import Pagenotfound from "./pages/Pagenotfound";
import Navbar from "./Navbar";
import Form from "./pages/Form";
import Test from "./test";
import FetchData from "./FetchData";

import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="profilepage" element={<Profilepage />} exact />
          <Route path="about" element={<About />} exact />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
