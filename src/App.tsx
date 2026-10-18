import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Links from "./Pages/Links";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/projects" element={<Navigate to="/" replace />} />
        <Route path="/links" element={<Links />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
