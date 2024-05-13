import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Puzzle, Profile } from "@pages";
import "./index.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solve/:id" element={<Puzzle />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
