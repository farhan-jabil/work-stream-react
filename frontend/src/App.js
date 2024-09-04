import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/landing/Home";
import Features from "./pages/landing/Features";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import AdminLayout from "./layout/AdminLayout";
import AdminOverview from "./pages/dashboard/admin/AdminOverview";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/features"
            element={
              <>
                <Navbar />
                <Features />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </>
            }
          />
          <Route
            path="/admin/overview"
            element={
              <>
                <AdminLayout>
                  <AdminOverview />
                </AdminLayout>
              </>
            }
          />
          <Route
            path="/admin/users"
            element={
              <>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </>
            }
          />
          <Route
            path="/admin/requests"
            element={
              <>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
