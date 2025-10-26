import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from "./pages/Auth/Signup"

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div id="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        </div>

      </div>
    </Router>

  )

}


function Home() {
  return <h2>Home</h2>;
}

export default App;

