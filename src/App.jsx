import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Index from "./pages/index"; // ✅ Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />  {/* ✅ Set this as home */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
