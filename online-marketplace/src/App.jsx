import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FormSwitch from "./components/FormSwitch";
import Sidebar from "./components/Sidebar";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <main className="ml-16 mt-16 p-6">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<FormSwitch />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
