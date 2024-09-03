import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Footer from "./components/footer/Footer";

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
          ></Route>
          <Route
            path="/features"
            element={
              <>
                <Navbar/>
                <Features/>
                <Footer/>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
