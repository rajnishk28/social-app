import "./App.css";

import { Routes, Route } from "react-router-dom";

import Fileupload from "./components/Fileupload";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fileupload />} />
      </Routes>
    </div>
  );
}

export default App;
