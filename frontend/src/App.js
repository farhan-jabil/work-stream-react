import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/landing/Home";
import Features from "./pages/landing/Features";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar/>
                <Home/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/features"
            element={
              <>
                <Navbar/>
                <Features/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/signInUp"
            element={
              <>
                <Login/>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
