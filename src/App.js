import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Filter from "./pages/Filter";

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
        <Route path=":slug" element={<Filter />} />
        {/* <Route path=":slug" element={<FilterUiDesign />} />
        <Route path=":slug" element={<FilterBackEnd />} /> */}
      </Routes>
    </div>
  );
}

export default App;
