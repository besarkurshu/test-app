import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />}>
          <Route path="/:id" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
