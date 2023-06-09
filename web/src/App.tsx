import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";



function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1 className="text-center">Hiii</h1>
      </Router>
    </>
  )
}

export default App
