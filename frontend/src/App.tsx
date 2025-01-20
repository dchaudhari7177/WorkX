import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Adjust the path if needed
import './index.css'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
