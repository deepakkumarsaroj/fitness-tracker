import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Goals />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
