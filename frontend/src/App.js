import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/landing/Home";
import Footer from "./components/footer/Footer";
import SignInUp from "./layout/SignInUp";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import UserLayout from "./layout/UserLayout";
import EmployeeManagement from "./pages/dashboard/admin/EmloyeeManagement";
import EmployeeForm from "./pages/dashboard/admin/EmployeeForm";
import LeaveRequests from "./pages/dashboard/admin/LeaveRequests";
import EmployeeDashboard from "./pages/dashboard/employee/EmployeeDashboard";
import RequestLeave from "./pages/dashboard/employee/RequestLeave";

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
            path="/signInUp"
            element={<SignInUp />}
          />
          <Route
            path="/admin/dashboard"
            element={
              <UserLayout>
                <AdminDashboard />
              </UserLayout>
            }
          />
          <Route
            path="/admin/users"
            element={
              <UserLayout>
                <EmployeeManagement />
              </UserLayout>
            }
          />
          <Route
            path="/admin/users/add"
            element={
              <UserLayout>
                <EmployeeForm />
              </UserLayout>
            }
          />
          <Route
            path="/admin/users/edit/:id"
            element={
              <UserLayout>
                <EmployeeForm />
              </UserLayout>
            }
          />
          <Route
            path="/admin/leave-requests"
            element={
              <UserLayout>
                <LeaveRequests />
              </UserLayout>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <UserLayout>
              </UserLayout>
            }
          />
          <Route
            path="/employee/dashboard"
            element={
              <UserLayout>
                <EmployeeDashboard/>
              </UserLayout>
            }
          />
          <Route
            path="/employee/request-leave"
            element={
              <UserLayout>
                <RequestLeave/>
              </UserLayout>
            }
          />
          <Route
            path="/employee/settings"
            element={
              <UserLayout>
              </UserLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
