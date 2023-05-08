import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Allproduct from "./pages/Allproduct";
import "./App.css";
import Details from "./pages/Details";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Allproduct" element={<Allproduct />} />
        <Route path="product/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
