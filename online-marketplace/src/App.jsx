import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FormSwitch from "./components/FormSwitch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<FormSwitch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
