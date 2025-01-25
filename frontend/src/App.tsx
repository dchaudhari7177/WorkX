import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Adjust the path if needed
import Services from "./components/ServiceCard"; // Add this page
import BookingForm from "./components/BookingForm"; // Add this page
import Navbar from "./components/Navbar"; // Navbar component
import Footer from "./components/Footer"; // Footer component
import './index.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {/* Add a Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<Home />} />

            {/* Additional Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookingForm />} />
          </Routes>
        </main>

        {/* Add a Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
