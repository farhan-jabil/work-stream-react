import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";

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
              </>
            }
          ></Route>
          <Route
            path="/features"
            element={
              <>
                <Navbar/>
                <Features/>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
