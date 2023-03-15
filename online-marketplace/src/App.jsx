import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Rating } from "@mui/material";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(2);

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<LandingPage />} >
              <Route path="/" element={<LandingPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
