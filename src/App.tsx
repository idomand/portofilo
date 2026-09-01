import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Links from "./Pages/Links";
import Blog from "./Pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
