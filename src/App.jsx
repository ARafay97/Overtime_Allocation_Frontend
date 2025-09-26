import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login"
import Register from "./components/register";
import STLDashboard from "./components/STLDashboard";
import Employee from "./components/employee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stl" element={<STLDashboard />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;
