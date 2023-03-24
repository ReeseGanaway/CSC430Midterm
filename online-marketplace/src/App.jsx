import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import FormSwitch from "./components/FormSwitch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
