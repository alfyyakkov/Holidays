import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Holidays from "./pages/Holidays";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holidays" element={<Holidays />} />
      </Routes>
    </Router>
  );
}

export default App;
