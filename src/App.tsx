import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Fl from "./components/fl";
import Dd from "./components/dd";
import Join from "./components/join";
import Results from "./components/results";
import About from "./components/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Install from "./components/install";
import { Box } from "@mui/material";
const App = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "160px" },
        paddingTop: { xs: "20px", md: "80px" },
        paddingBottom: { xs: "20px", md: "80px" },
      }}
      style={{ backgroundColor: "#F3F3F3" }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/federated-learning" element={<Fl />}></Route>
          <Route path="/drug-discovery" element={<Dd />}></Route>
          <Route path="/about-me" element={<About />}></Route>
          <Route path="/join-us" element={<Join />}></Route>
          <Route path="/results" element={<Results />}></Route>
          <Route path="/install" element={<Install />}></Route>
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;
