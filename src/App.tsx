import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import Home from "./page/Home";

import Studio from "./page/Akademik/Studio";
import Dashboard from "./page/Admin/Dashboard";
import Article from "./page/Admin/Article";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studio/:url" element={<Studio />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;