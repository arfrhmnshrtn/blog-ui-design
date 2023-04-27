import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import FilterFrontEnd from "./pages/FilterByFrontEnd";
import FilterUiDesign from "./pages/FilterByUiDesign";
import FilterBackEnd from "./pages/FilterByBackEnd";
import Navbar from "./pages/Navbar";

function getParams() {
  let { params } = useParams;
  console.log(params);
}

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<FilterFrontEnd />} />
        <Route path="/uidesign" element={<FilterUiDesign />} />
        <Route path="/backend" element={<FilterBackEnd />} />
      </Routes>
    </div>
  );
}

export default App;
