import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Landing from "./pages/Landing";
import VO2Max from "./pages/VO2Max";
import BMI from "./pages/BMI";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/vo2" element={<VO2Max />} />
          <Route path="/bmi" element={<BMI />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
