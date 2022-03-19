import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Box } from "@mui/material";
const App = () => {
  return (
    <Box
      padding="160px"
      paddingTop="80px"
      style={{ backgroundColor: "#F3F3F3" }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
