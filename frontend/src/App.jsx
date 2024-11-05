import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Sidebar from "./components/home/Sidebar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Sidebar />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
